/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPatientRecord } from './ui.models';
import * as fromUIReducer from './ui.reducer';

export const getPatientRecordsFeatureState = createFeatureSelector
<fromUIReducer.ExIPatRecState>(fromUIReducer.uiFeatureKey);

export const getPatientRecords = createSelector(
  getPatientRecordsFeatureState,
  state => state.Recs
)

// export const getPatientRecords = createSelector(
//   getPatientRecordsFeatureState,
//   (state: fromUIReducer.ExtendedInterfacePatRecord) => {
//     debugger;
//       return state.Recs;
//   }
// );

//     createSelector(getPatientRecordsFeatureState, (state): IPatientRecord[] => {
//         return state && state.Recs;
//     }
// );

  
export const getError = createSelector(
  getPatientRecordsFeatureState,
  state => state.error
)