import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import * as UiActions from './ui.actions';
import { IpappService } from '../ipapp.service';
import { fetch } from '@nrwl/angular';
import { EmptyError } from 'rxjs/internal/util/EmptyError';

@Injectable()
export class uiEffects 
 {
  LoadPatientRecords$ = createEffect(() =>
            this.actions$.pipe (ofType(UiActions.PatientRecordActionTypes.LoadPatientRecords),
                              fetch({
        run: (action) => {
          return this.ipappService.getAll()
            .pipe(
              map(PatientRecordArray => new UiActions.LoaddPatientRecordsSuccess
                ({ PatientRecordArray }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return new UiActions.LoaddPatientRecordsFailure({ error });
        },
      })
    )

    // loadMovie$ = createEffect(() =>
    //   this.action$.pipe(
    //     ofType(UiActions.PatientRecordActionTypes.LoadPatientRecords),
    //     exhaustMap(() =>
    //     this.ipappService.getAll().pipe(
    //         map((PatientRecordArray) => new UiActions.LoaddPatientRecordsSuccess({PatientRecordArray})),
    //         catchError(() => EmptyError)
    //       )
    //     )
    //   )

  //     loadUsers$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(UiActions.PatientRecordActionTypes.LoadPatientRecords),
  //   mergeMap(() => this.ipappService.getAll()
  //     .pipe(
  //       map(PatientRecordArray => ({ type: UiActions.PatientRecordActionTypes, payload: PatientRecordArray }))
  //     ))
  //   ),
  //   //map(mappedUsers => this.store.dispatch(UserActions.saveUser({mappedUsers}))) // - Either dispatch an action to save mapped users
  //   { dispatch: false} // or add this param so that this effect does not need to dispatch new action
  );


//   loadUsers$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(UiActions.PatientRecordActionTypes.LoadPatientRecords),
//     mergeMap(() => this.ipappService.getAll()
//       .pipe(
//         map(PatientRecordArray => ({ type: UiActions.PatientRecordActionTypes, payload: PatientRecordArray }))
//       ))
//     ),
//     //map(mappedUsers => this.store.dispatch(UserActions.saveUser({mappedUsers}))) // - Either dispatch an action to save mapped users
//     { dispatch: false} // or add this param so that this effect does not need to dispatch new action
//   );

  constructor(private actions$: Actions, private ipappService: IpappService) {}
}
