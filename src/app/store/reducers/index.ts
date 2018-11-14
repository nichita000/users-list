import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { State as ParticipantState, getIds, getParticipants as selectParticipants, reducer } from './participant';

export interface State {
    participants: ParticipantState;
}

export const reducers: ActionReducerMap<State> = {
    participants: reducer
};

export const getParticipantsState = createFeatureSelector<ParticipantState>('participants');
export const getParticipants = createSelector(
    getParticipantsState,
    selectParticipants
);
export const getParticipantIds = createSelector(
    getParticipantsState,
    getIds
);
