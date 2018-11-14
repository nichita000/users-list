import { Participant } from '../models/participant';
import * as fromActions from '../actions/participant';

import * as util from '../utils/participant-reducer';

export interface State {
    ids: Array<string>;
    participants: Array<Participant>;
}

const initialState: State = {
    ids: [], participants: []
};

export function reducer(state = initialState, action: fromActions.Action): State {
    switch (action.type) {
        case fromActions.PARTICIPANTS_SOCKET_SUBSCRIBE: return state;
        case fromActions.LOAD_PARTICIPANTS: return state;
        case fromActions.LOAD_PARTICIPANTS_SUCCESS: return util.updateParticipantsList(state, action);
        case fromActions.PARTICIPANT_ADDED: return util.participantAdded(state, action);
        case fromActions.PARTICIPANT_REMOVED: return util.participantRemoved(state, action);
        case fromActions.PARTICIPANT_READY_STATUS_CHANGED: return util.participantChangeStatus(state, action);
        default:
            return state;
    }
}

export const getParticipants = (state: State) => state.participants;
export const getIds = (state: State) => state.ids;
