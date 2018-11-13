import { Action } from '@ngrx/store';
import { Participant } from '../models/participant';
import { ParticipantSocket } from '../models/participant-socket';

export const PARTICIPANT_ADDED = 'PARTICIPANT_ADDED';
export const PARTICIPANT_REMOVED = 'PARTICIPANT_REMOVED';
export const PARTICIPANT_READY_STATUS_CHANGED = 'PARTICIPANT_READY_STATUS_CHANGED';

export class ParticipantAdded implements Action {
    readonly type = PARTICIPANT_ADDED;
    constructor(public payload: Participant) {}
}

export class ParticipantRemoved implements Action {
    readonly type = PARTICIPANT_REMOVED;
    constructor(public payload: string) {}
}

export interface StatusChangedPayload {
    newReadyStatus: boolean;
    participantId: string;
}
export class ParticipantStatusChanged implements Action {
    readonly type = PARTICIPANT_READY_STATUS_CHANGED;
    constructor(public payload: StatusChangedPayload) {}
}

export const LOAD_PARTICIPANTS = 'LOAD_PARTICIPANTS';
export const LOAD_PARTICIPANTS_SUCCESS = 'LOAD_PARTICIPANTS_SUCCESS';
export const LOAD_PARTICIPANTS_ERROR = 'LOAD_PARTICIPANTS_ERROR';

export class LoadParticipants implements Action {
    readonly type = LOAD_PARTICIPANTS;
}

export class LoadParticipantsSuccess implements Action {
    readonly type = LOAD_PARTICIPANTS_SUCCESS;
    constructor(public payload: Array<Participant>) {}
}

export class LoadParticipantsError implements Action {
    readonly type = LOAD_PARTICIPANTS_ERROR;
    constructor(public payload: any) {}
}

export const PARTICIPANTS_SOCKET_SUBSCRIBE = 'PARTICIPANTS_SOCKET_SUBSCRIBE';
export const PARTICIPANTS_SOCKET_RECIVED = 'PARTICIPANTS_SOCKET_RECIVED';

export class ParticipantsSockerSubscribe implements Action {
    readonly type = PARTICIPANTS_SOCKET_SUBSCRIBE;
}
export class ParticipantsSocketRecived implements Action {
    readonly type = PARTICIPANTS_SOCKET_RECIVED;
    constructor(public payload: ParticipantSocket) {}
}

export type Action = ParticipantAdded | ParticipantRemoved | ParticipantStatusChanged |
                     LoadParticipants | LoadParticipantsSuccess | LoadParticipantsError |
                     ParticipantsSockerSubscribe | ParticipantsSocketRecived;
