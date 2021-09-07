
  // exports: [
  //   ListComponent,
  //   AddComponent
  // ],

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
//import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    //IonicModule,
    RouterModule.forChild([
      { path: '', component: ListComponent } 
    ])
  ],
  declarations: [ListComponent],
})
export class UiModule {}
