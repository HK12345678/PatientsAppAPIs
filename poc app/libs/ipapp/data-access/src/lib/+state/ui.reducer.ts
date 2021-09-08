import { Action, createReducer, on } from '@ngrx/store';
import * as UiActions from './ui.actions';
import { IPatientRecord} from  './ui.models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const uiFeatureKey = 'ui';

export interface ExtendedInterfacePatRecord extends EntityState<IPatientRecord> {
  selectedId?: string | number; 
  loaded: boolean; 
  error?: string | null;
}

export interface PatientRecordPartialState {
  readonly [uiFeatureKey]: ExtendedInterfacePatRecord;
}


export const patientRecordAdapter: EntityAdapter<IPatientRecord> = createEntityAdapter<IPatientRecord>();

export const initialState: ExtendedInterfacePatRecord = patientRecordAdapter.getInitialState({
  loaded: false,
});


export const patientRecordReducer = createReducer(
  initialState,

  on(UiActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UiActions.loadPatientRecordSuccess, (state, { PatientRecordArray }) =>
  patientRecordAdapter.setAll(PatientRecordArray, { ...state, loaded: true })
  ),
  on(UiActions.loadPatientRecordFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: ExtendedInterfacePatRecord | 
                      undefined, action: Action) {
  return patientRecordReducer(state, action);
}