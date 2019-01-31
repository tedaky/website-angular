import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { environment } from '../../environments/environment';

export function loadMainModule() {
  if (environment.production) {
    return MainModule;
  }
}

const routes: Routes = (environment.production) ?
  [
    {
      path: '',
      loadChildren: './main/main.module#MainModule'
    }
  ] :
  [
    {
      path: '',
      component: MainComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
