import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'libs/ui/src/lib/List/list.component';
import { AddComponent } from 'libs/ui/src/lib/Add/add.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    // loadChildren: () =>
    // import('@inx/ui').then((m) => m.UiModule),
  },
  {
    path: 'add',
    component: AddComponent,
    // loadChildren: () =>
    // import('@inx/ui').then((m) => m.UiModule),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
