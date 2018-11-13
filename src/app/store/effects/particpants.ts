import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsSocketService } from '../../services/participants-socket.service';

import {
    LOAD_PARTICIPANTS,
    LoadParticipantsSuccess, LoadParticipantsError,

    PARTICIPANTS_SOCKET_SUBSCRIBE, ParticipantsSocketRecived,
    PARTICIPANT_ADDED, ParticipantAdded,
    PARTICIPANT_REMOVED, ParticipantRemoved,
    PARTICIPANT_READY_STATUS_CHANGED, ParticipantStatusChanged
} from '../actions/participant';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ParticipantSocket } from '../models/participant-socket';

@Injectable({ providedIn: 'root' })
export class ParticipantsEffects {
    constructor(
        private _actions$: Actions,
        private _participantsService: ParticipantsService,
        private _participantsSocketService: ParticipantsSocketService,
    ) {}

    @Effect()
    loadParticipants = this._actions$.ofType(LOAD_PARTICIPANTS).pipe(
        switchMap(
            _ => this._participantsService.participantsList().pipe(
                    map(response => new LoadParticipantsSuccess(response)),
                    catchError((error: any) => of(
                        new LoadParticipantsError(error)
                    ))
                )
        ),
    );

    @Effect()
    sockerSubscribe = this._actions$.ofType(PARTICIPANTS_SOCKET_SUBSCRIBE).pipe(
        switchMap(
            _ => this._participantsSocketService.connect().pipe(
                map(response => JSON.parse(response['body'])),
                map((response: ParticipantSocket) => this.actionBySocketMessage(response)),
                catchError((error: Error) => of(
                    new LoadParticipantsError(error)
                ))
            )
        )
    );

    private actionBySocketMessage(action: ParticipantSocket): any {
        switch (action.messageType) {
            case PARTICIPANT_ADDED:
                return new ParticipantAdded(action.participant);
            case PARTICIPANT_REMOVED:
                return new ParticipantRemoved(action.participantId);
            case PARTICIPANT_READY_STATUS_CHANGED:
                const { participantId, newReadyStatus } = action;
                return new ParticipantStatusChanged({ participantId, newReadyStatus });
        }
    }
}
