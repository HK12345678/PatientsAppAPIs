
import { Component, OnInit, Input } from '@angular/core';
import { IPatientRecord } from '@papp/data';
import { Router } from '@angular/router';
@Component({
  selector: 'papp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() PatientRecordArray!: IPatientRecord[];

  constructor() {}

  ngOnInit() {}
}