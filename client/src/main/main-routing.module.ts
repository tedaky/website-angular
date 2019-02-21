import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { MainComponent } from './main.component';

/**
 * Temporary `Main` `Routes`
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'second',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
