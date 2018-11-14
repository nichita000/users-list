import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromParticipant from './participant';

export interface State {
    participants: fromParticipant.State;
}

export const reducers: ActionReducerMap<State> = {
    participants: fromParticipant.reducer
};

export const getParticipantsState = createFeatureSelector<fromParticipant.State>('participants');
export const getParticipants = createSelector(
    getParticipantsState,
    fromParticipant.getParticipants
);
export const getParticipantIds = createSelector(
    getParticipantsState,
    fromParticipant.getIds
);
