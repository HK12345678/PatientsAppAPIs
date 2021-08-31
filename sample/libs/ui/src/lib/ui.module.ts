import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsAddRecordComponent } from './patients-add-record/patients-add-record.component';
import { PatientsUpdateRecordComponent } from './patients-update-record/patients-update-record.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PatientsListComponent,
    PatientsAddRecordComponent,
    PatientsUpdateRecordComponent
  ],
  exports: [
    PatientsListComponent,
    PatientsAddRecordComponent,
    PatientsUpdateRecordComponent
  ],
})
export class UiModule {}
