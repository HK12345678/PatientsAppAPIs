import { Component, OnInit, Input } from '@angular/core';
import {Patient} from '@sample/data';

@Component({
  selector: 'sample-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
   @Input() Patients: Patient[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}



