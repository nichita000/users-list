import { State } from '../reducers/participant';
import { Participant } from '../models/participant';
import * as fromActions from '../actions/participant';

import { isEmpty } from 'lodash';

/**
 *
 * @param state: State;
 * @param action: LoadParticipantsSuccess
 *
 * Update participants list.
 */
export function updateParticipantsList(state: State, action: fromActions.LoadParticipantsSuccess): State {
    const participantsLoaded = action.payload;

    if (isEmpty(state.ids) && !isEmpty(participantsLoaded)) {
        const idsLoaded = participantsLoaded.map((participant: Participant) => participant.id);

        return {
            ...state,
            participants: [...participantsLoaded],
            ids: idsLoaded
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
            ids: updatedIds
        };
    } else {
        return state;
    }
}

/**
 *
 * @param state: State
 * @param action: ParticipantAdded
 *
 * Add participant to the Store.
 */
export function participantAdded(state: State, action: fromActions.ParticipantAdded): State {
    const newParticipant = action.payload;
    const newParticipantId = newParticipant.id;

    return {
        ...state,
        participants: [ ...state.participants, newParticipant ],
        ids: [ ...state.ids, newParticipantId ]
    };
}

/**
 *
 * @param state State
 * @param action ParticipantRemoved
 *
 * Remove participant from Store.
 */
export function participantRemoved(state: State, action: fromActions.ParticipantRemoved): State {
    const participantIdToRemove = action.payload;

    const filteredParticipants: Array<Participant> = state.participants.filter(
        (participant: Participant) => participant.id !== participantIdToRemove
    );
    const ids: Array<string> = filteredParticipants.map((participant: Participant) => participant.id);

    return { ...state, participants: filteredParticipants, ids };
}

/**
 *
 * @param state State
 * @param action ParticipantStatusChanged
 *
 * Change status by participantId.
 */
export function participantChangeStatus(state: State, action: fromActions.ParticipantStatusChanged): State {
    const { participantId, newReadyStatus: newStatus } = action.payload;

    const updatedParticipants: Array<Participant> = state.participants.map(
        (participant: Participant) => {
            if (participant.id === participantId) {
                participant.ready = newStatus;
            }

            return participant;
        }
    );

    return { ...state, participants: updatedParticipants };
}
