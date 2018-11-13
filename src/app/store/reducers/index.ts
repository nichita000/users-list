import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromParticipants from './participant';

export interface State {
    participants: fromParticipants.State;
}

export const reducers: ActionReducerMap<State> = {
    participants: fromParticipants.reducer
};

export const getParticipantsState = createFeatureSelector<fromParticipants.State>('participants');
export const getParticipants = createSelector(
    getParticipantsState,
    fromParticipants.getParticipants
);
export const getParticipantIds = createSelector(
    getParticipantsState,
    fromParticipants.getIds
);
