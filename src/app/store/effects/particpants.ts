import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsSocketService } from '../../services/participants-socket.service';

import * as fromActions from '../actions/participant';
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
    loadParticipants = this._actions$.ofType(fromActions.LOAD_PARTICIPANTS).pipe(
        switchMap(
            _ => this._participantsService.participantsList().pipe(
                    map(response => new fromActions.LoadParticipantsSuccess(response)),
                    catchError((error: any) => of(
                        new fromActions.LoadParticipantsError(error)
                    ))
                )
        ),
    );

    @Effect()
    sockerSubscribe = this._actions$.ofType(fromActions.PARTICIPANTS_SOCKET_SUBSCRIBE).pipe(
        switchMap(
            _ => this._participantsSocketService.connect().pipe(
                map(response => JSON.parse(response['body'])),
                map((response: ParticipantSocket) => this.actionBySocketMessage(response)),
                catchError((error: Error) => of(
                    new fromActions.LoadParticipantsError(error)
                ))
            )
        )
    );

    private actionBySocketMessage(action: ParticipantSocket): any {
        switch (action.messageType) {
            case fromActions.PARTICIPANT_ADDED:
                return new fromActions.ParticipantAdded(action.participant);
            case fromActions.PARTICIPANT_REMOVED:
                return new fromActions.ParticipantRemoved(action.participantId);
            case fromActions.PARTICIPANT_READY_STATUS_CHANGED:
                const { participantId, newReadyStatus } = action;
                return new fromActions.ParticipantStatusChanged({ participantId, newReadyStatus });
        }
    }
}
