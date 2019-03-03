import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
