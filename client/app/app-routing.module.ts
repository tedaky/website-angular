import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { environment } from '../../environments/environment';

export function loadMainModule(env) {
  if (env) {
    return MainModule;
  }
}

export function appRoutes(env): Routes {
  return (env) ? [
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
}

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes(environment.production))
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
