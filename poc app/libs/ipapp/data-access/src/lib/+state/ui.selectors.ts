import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUIReducer from './ui.reducer';

export const selectUiState = createFeatureSelector
<fromUIReducer.PatientRecordPartialState, fromUIReducer.ExtendedInterfacePatRecord>
(
  fromUIReducer.uiFeatureKey
);

const { selectAll } = fromUIReducer.patientRecordAdapter
.getSelectors();

export const getPatientRecordsLoaded = createSelector(
  selectUiState,
  (state: fromUIReducer.ExtendedInterfacePatRecord) => state.loaded
);

export const getQuotesError = createSelector(
  selectUiState,
  (state: fromUIReducer.ExtendedInterfacePatRecord) => state.error
);

export const getAllPatientRecords = createSelector(selectUiState,
  (state: fromUIReducer.ExtendedInterfacePatRecord) =>
  selectAll(state)
);

export const getRandomQuotes = createSelector(getAllPatientRecords,
   (IPatientRecordArray) => {
    return {
      ...IPatientRecordArray,
    };
  });
