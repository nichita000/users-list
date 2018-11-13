import { Injectable } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';

import { PARTICIPANTS_EVENT_ROUTE } from '../../assets/config';

@Injectable({ providedIn: 'root' })
export class ParticipantsSocketService {

    constructor(
        private _stompService: StompService,
    ) {}

    connect(): any {
        return this._stompService.subscribe(PARTICIPANTS_EVENT_ROUTE);
    }
}
