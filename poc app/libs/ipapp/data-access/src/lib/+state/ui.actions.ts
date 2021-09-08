import { createAction, props } from '@ngrx/store';
import { IPatientRecord } from './ui.models'

export const init = createAction('[List Page] Init');

export const loadPatientRecordSuccess = createAction(
  '[UI/API] Load Patient Record Success',
  props<{ PatientRecordArray: IPatientRecord[] }>()
);

export const loadPatientRecordFailure = createAction(
  '[UI/API] Load Patient Record Failure',
  props<{ error: any }>()
);
