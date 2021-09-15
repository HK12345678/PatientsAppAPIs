/* eslint-disable no-debugger */
import { Action } from '@ngrx/store';
import { IPatientRecord } from './ui.models'

export enum PatientRecordActionTypes {
  LoadPatientRecords = '[PatientRecord] Load Patient Records',
  LoaddPatientRecordsSuccess = '[PatientRecord] Load Patient Success',
  LoaddPatientRecordsFailure = '[PatientRecord] Load Patient Failure',

  LoadPatientIDRecord = '[PatientRecord] Load Patient Record By ID',
  LoaddPatientIDRecordSuccess = '[PatientRecord] Load Patient By ID Success',
  LoaddPatientIDRecordFailure = '[PatientRecord] Load Patient By ID Failure',
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

export class LoadPatientRecordByID implements Action {
  readonly type = PatientRecordActionTypes.LoadPatientIDRecord;
  constructor(
    public payload:  number ) {
    }
// constructor(public payload: { ID: number }) { }
}

export class LoaddPatientRecordByIDSuccess implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientIDRecordSuccess;
  constructor(public payload: { PatientRecord: IPatientRecord }) { }
}

export class LoaddPatientRecordByIDFailure implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientIDRecordFailure;
  constructor(public payload: { error: string }) { }
}


export type PatientRecordsActions = LoadPatientRecords | LoaddPatientRecordsSuccess | LoaddPatientRecordsFailure  |
LoadPatientRecordByID | LoaddPatientRecordByIDSuccess | LoaddPatientRecordByIDFailure;


