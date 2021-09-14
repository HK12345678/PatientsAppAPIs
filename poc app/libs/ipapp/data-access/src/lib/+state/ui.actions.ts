import { Action } from '@ngrx/store';
import { IPatientRecord } from './ui.models'

export enum PatientRecordActionTypes {
  LoadPatientRecords = '[PatientRecord] Load Patient Records',
  LoaddPatientRecordsSuccess = '[PatientRecord] Load Patient Success',
  LoaddPatientRecordsFailure = '[PatientRecord] Load Patient Failure',
}

export class LoadPatientRecords implements Action {
  readonly type = PatientRecordActionTypes.LoadPatientRecords;
}

export class LoaddPatientRecordsSuccess implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientRecordsSuccess;
  constructor(public payload: { PatientRecordArray: IPatientRecord[] }) { }
}

export class LoaddPatientRecordsFailure implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientRecordsFailure;
  constructor(public payload: { error: string }) { }
}

export type PatientRecordsActions = LoadPatientRecords | LoaddPatientRecordsSuccess | LoaddPatientRecordsFailure;


