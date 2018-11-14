import { Participant } from '../models/participant';
import {
    Action,
    PARTICIPANTS_SOCKET_RECIVED,
    PARTICIPANTS_SOCKET_SUBSCRIBE,
    LOAD_PARTICIPANTS,
    LOAD_PARTICIPANTS_ERROR,
    LOAD_PARTICIPANTS_SUCCESS,
    PARTICIPANT_ADDED,
    PARTICIPANT_READY_STATUS_CHANGED,
    PARTICIPANT_REMOVED
} from '../actions/participant';

import { isEmpty } from 'lodash';

export interface State {
    ids: Array<string>;
    participants: Array<Participant>;
    loadInProgress: boolean;
    socketSubscribed: boolean;
}

const initialState: State = {
    ids: [], participants: [],
    loadInProgress: false, socketSubscribed: false
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case PARTICIPANTS_SOCKET_SUBSCRIBE:
            return { ...state, socketSubscribed: true };
        case LOAD_PARTICIPANTS:
            return { ...state, loadInProgress: true };
        case LOAD_PARTICIPANTS_SUCCESS:
            const participantsLoaded = action.payload;

            if (isEmpty(state.ids) && !isEmpty(participantsLoaded)) {
                const idsLoaded = participantsLoaded.map((participant: Participant) => participant.id);

                return {
                    ...state,
                    participants: [...participantsLoaded],
                    ids: idsLoaded,
                    loadInProgress: false
                };
            } else if (!isEmpty(state.ids) && !isEmpty(participantsLoaded)) {
                const addParticipantsList = participantsLoaded.filter(
                    (participant: Participant) => !state.ids.includes(participant.id)
                );
                const newParticipantsList = { ...state.participants, ...addParticipantsList };
                const updatedIds = newParticipantsList.map((participant: Participant) => participant.id);

                return {
                    ...state,
                    participants: newParticipantsList,
                    ids: updatedIds,
                    loadInProgress: false
                };
            } else {
                return { ...state, loadInProgress: false };
            }
        case PARTICIPANT_ADDED:
            const newParticipant = action.payload as Participant;
            const newParticipantId = newParticipant.id;

            return {
                ...state,
                participants: [ ...state.participants, newParticipant ],
                ids: [ ...state.ids, newParticipantId ]
            };
        case PARTICIPANT_REMOVED:
            const participantIdToRemove = action.payload;

            const filteredParticipants: Array<Participant> = state.participants.filter(
                (participant: Participant) => participant.id !== participantIdToRemove
            );
            const ids: Array<string> = filteredParticipants.map((participant: Participant) => participant.id);

            return { ...state, participants: filteredParticipants, ids };
        case PARTICIPANT_READY_STATUS_CHANGED:
            const { participantId, newReadyStatus: newStatus } = action.payload;

            const updatedParticipants: Array<Participant> = state.participants.map(
                (participant: Participant) => {
                    if (participant.id === participantId) {
                        participant.ready = newStatus;
                        console.log(participant.identifier, 'changed from =>', !newStatus, 'to =>', newStatus);
                    }

                    return participant;
                }
            );

            return { ...state, participants: updatedParticipants };
        default:
            return state;
    }
}

export const getParticipants = (state: State) => state.participants;
export const getIds = (state: State) => state.ids;
