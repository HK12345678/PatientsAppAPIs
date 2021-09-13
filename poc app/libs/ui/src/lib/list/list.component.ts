import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UISelector } from '@papp/ipapp/data-access';
import { IPatientRecord } from 'libs/ipapp/data-access/src/lib/+state/ui.models';
import { Observable } from 'rxjs';
//import * as fromUIReducer from './+state/ui.reducer';


@Component({
  selector: 'inx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  // records: Observable<IPatientRecord[]>;

  constructor(private route: Router) {
    // this.store.dispatch(new );
    // this.records = this.store.pipe(select(UISelector.getPatientRecords));
  }
  nextpage() {
    // debugger;
    this.route.navigate(['add']);
  }

  ngOnInit(): void {
    
  }
}
