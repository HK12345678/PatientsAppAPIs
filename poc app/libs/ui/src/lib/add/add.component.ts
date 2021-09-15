/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IPatientRecord, UIActions, UISelector } from '@papp/ipapp/data-access';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'papp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  errorMessage = undefined;
  //PatientRecordRetrieved$!: Observable<IPatientRecord>;
  PatientRecordRetrieved$ = this.store.select(UISelector.getPatientRecordByID);
  //PatientRecordRetrieved = {} as IPatientRecord;
  Form!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private store: Store, private routed: ActivatedRoute) {
    
   }
  
  back(){
    this.route.navigate(['list']);}
  buttonClick(){}
  
  ngOnInit(): void {
    this.Form = this.fb.group({
      Title: ["", Validators.required],
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      BirthDate: ["", Validators.required],
      Age: ["", Validators.required],
      Active: ["", Validators.required],
    })

    this.store.dispatch(new UIActions.LoadPatientRecordByID(Number(this.routed.snapshot.paramMap.get('id'))));
    
    // this.store.pipe(select(UISelector.getPatientRecordByID)).subscribe(
    //   patientRecords => 
    //   {
    //     this.PatientRecordRetrieved = patientRecords;
    //   }
    // )

    this.PatientRecordRetrieved$.subscribe(PatientRec => {
      if (PatientRec) {
        this.Form.patchValue({
          Title: PatientRec.Title,
          FirstName: PatientRec.FirstName,
          LastName: PatientRec.LastName,
          BirthDate: PatientRec.BirthDate,
          Age: PatientRec.Age,
          Active: PatientRec.Active,
        });
      }
    })
}
}