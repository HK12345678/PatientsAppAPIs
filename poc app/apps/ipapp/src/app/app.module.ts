// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { UiModule } from '@papp/ui';
// import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

// @NgModule({
//   declarations: [AppComponent],
//   entryComponents: [],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     RouterModule.forRoot([
//       { path: '', pathMatch: 'full', redirectTo: 'ui' },
//       { path: 'ui', loadChildren: () => import('@papp/ui').then(m => m.UiModule) }
//     ]),
//     StoreModule.forRoot({}),
//     EffectsModule.forRoot([]),

//     !environment.production ? StoreDevtoolsModule.instrument() : [],
 
//   ],
//   providers: [],
//   //providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from 'libs/ui/src/lib/List/list.component';
import {HttpClientModule} from '@angular/common/http';
import { Action, StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, ListComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, RouterModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, StoreModule.forRoot({}),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule, ListComponent]
})
export class AppModule {}
