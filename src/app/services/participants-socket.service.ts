import { Injectable } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';

@Injectable({ providedIn: 'root' })
export class ParticipantsSocketService {
    participantsEventRoute = '/topic/messages';

    constructor(
        private _stompService: StompService,
    ) {}

    connect(): any {
        return this._stompService.subscribe(this.participantsEventRoute);
    }
}
