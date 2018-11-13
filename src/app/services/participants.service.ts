import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Participant } from '../store/models/participant';

import { BASE_HREF } from '../../assets/config';

@Injectable({ providedIn: 'root' })
export class ParticipantsService {

    constructor(private _http: HttpClient) {}

    participantsList(): Observable<Array<Participant>> {
        const url = `${BASE_HREF}/participants`;

        return this._http.get<Array<Participant>>(url);
    }
}
