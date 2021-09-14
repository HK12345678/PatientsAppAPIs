import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUIReducer from './ui.reducer';

export const getPatientRecordsFeatureState = createFeatureSelector<fromUIReducer.ExtendedInterfacePatRecord>('UIState');

export const getPatientRecords = createSelector(
  getPatientRecordsFeatureState,
  state => state.Recs
)
  
export const getError = createSelector(
  getPatientRecordsFeatureState,
  state => state.error
)