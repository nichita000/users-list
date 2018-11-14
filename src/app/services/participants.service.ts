import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Participant } from '../store/models/participant';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ParticipantsService {

    constructor(private _http: HttpClient) {}

    participantsList(): Observable<Array<Participant>> {
        const url = `${environment.baseHref}/participants`;

        return this._http.get<Array<Participant>>(url);
    }
}
