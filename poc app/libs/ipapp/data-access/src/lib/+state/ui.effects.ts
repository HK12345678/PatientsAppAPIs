/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {  catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import * as UiActions from './ui.actions';
import { IpappService } from '../ipapp.service';
import { fetch } from '@nrwl/angular';
import { EmptyError } from 'rxjs/internal/util/EmptyError';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IPatientRecord } from './ui.models';

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
    ));

    // LoadPatientRecord$ = createEffect(() =>
    //         this.actions$.pipe (ofType(UiActions.PatientRecordActionTypes.LoadPatientIDRecord),
    //                           fetch({
    //     run: (action1) => {
    //       return this.ipappService.getByID(1)
    //         .pipe(
    //           map(PatientRecord => new UiActions.LoaddPatientRecordByIDSuccess
    //             ({ PatientRecord }))
    //         );
    //     },
    //     onError: (action1, error) => {
    //       console.error('Error', error);
    //       return new UiActions.LoaddPatientRecordByIDFailure({ error });
    //     },
    //   })
    // ));
    @Effect()
    loadCustomer$: Observable<Action> = this.actions$.pipe(
      ofType<UiActions.LoadPatientRecordByID>(
        UiActions.PatientRecordActionTypes.LoadPatientIDRecord
      ),
      mergeMap((action: UiActions.LoadPatientRecordByID) =>
      this.ipappService.getByID(action.payload).pipe(
          map(
            (PatientRecord) =>
              new UiActions.LoaddPatientRecordByIDSuccess({PatientRecord})
          ),
          catchError(err => of(new UiActions.LoaddPatientRecordByIDFailure(err)))
        )
      )
    );

  constructor(private actions$: Actions, private ipappService: IpappService) {}
}
