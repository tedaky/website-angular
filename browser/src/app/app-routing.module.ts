import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { MainModule } from '../main/main.module';
import { MainComponent } from '../main/main.component';
import { environment } from '../../../environments/environment';


/**
 * `Function` to compile the `MainModule` for the `server`
 *
 * This `Function` is to never be called
 *
 * @param env Indicate if `production` is in use
 */
export function loadMainModule(env: boolean) {
  if (env) {
    return MainModule;
  }
}

/**
 * Lazily Load `MainModule` or load `MainComponent`
 *
 * @param env Indicate if `production` is in use
 */
export function appRoutes(env: boolean): Routes {
  return (env) ? [
    {
      path: '',
      loadChildren: '../main/main.module#MainModule'
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
