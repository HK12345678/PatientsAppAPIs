import { Component, OnInit, Input  } from '@angular/core';
import {IPatientRec} from '@poc/data';

@Component({
  selector: 'poc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() PatientRecArray!: IPatientRec[];

  constructor() { }

  ngOnInit(): void {
  }

}
