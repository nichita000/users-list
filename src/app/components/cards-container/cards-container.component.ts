import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Participant } from '../../store/models/participant';
import { Observable } from 'rxjs';

import {
  State as RootState,
  getParticipants
} from '../../store/reducers/index';
import { LoadParticipants, ParticipantsSockerSubscribe } from '../../store/actions/participant';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: [ './cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  $participants: Observable<Array<Participant>>;

  constructor(
      private _store: Store<RootState>,
  ) {}

  ngOnInit(): void {
    this._store.dispatch(new LoadParticipants());
    this._store.dispatch(new ParticipantsSockerSubscribe());

    this.$participants = this._store.select(getParticipants);
  }

  trackByFn = (participant: Participant) => participant.id;
}
