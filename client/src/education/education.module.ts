import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EducationComponent } from './education.component';

@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
