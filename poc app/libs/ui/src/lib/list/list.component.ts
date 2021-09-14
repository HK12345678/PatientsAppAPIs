import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UIActions, UISelector } from '@papp/ipapp/data-access';
import { IPatientRecord } from 'libs/ipapp/data-access/src/lib/+state/ui.models';
import { IpappService } from 'libs/ipapp/data-access/src/lib/ipapp.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'inx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  //records: Observable<IPatientRecord[]>;
  //records$ = this.store.select(state => UISelector.getUsers);
  errorMessage = undefined;
  PatientRecordsRetrieved: IPatientRecord[] = [];

  constructor(private route: Router, private store: Store) {
   
  }
  nextpage() {
    // debugger;
    this.route.navigate(['add']);
  }

  ngOnInit(): void {
   //debugger;
   this.store.dispatch(new UIActions.LoadPatientRecords());

   this.store.pipe(select(UISelector.getPatientRecords)).subscribe(
    patientRecords => {
      this.PatientRecordsRetrieved = patientRecords;
    }
  )

  this.store.pipe(select(UISelector.getError)).subscribe(
    err => {
     // this.errorMessage = err;
    }
  )
  }
}
