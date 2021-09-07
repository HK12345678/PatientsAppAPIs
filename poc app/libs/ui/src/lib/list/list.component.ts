import { Component, OnInit, Input } from '@angular/core';
import { IPatientRecord } from '@ipoc/data';
import { Router } from '@angular/router';
@Component({

  selector: 'ipoc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() PatientRecordArray!: IPatientRecord[];
  constructor() { }

  ngOnInit(): void {
  }
  nextpage() {
    //this.route.navigate(['lib/add']);
  }

}


