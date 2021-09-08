import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map } from 'rxjs/operators';
import * as UiActions from './ui.actions';
import { IpappService } from '../ipapp.service';
import { fetch } from '@nrwl/angular';


@Injectable()
export class uiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.init),
      fetch({
        run: (action) => {
          return this.ipappService.getAll()
            .pipe(
              map(PatientRecordArray => UiActions.loadPatientRecordSuccess
                ({ PatientRecordArray }))
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UiActions.loadPatientRecordFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private ipappService: IpappService) {}
}
