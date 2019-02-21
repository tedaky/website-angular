import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VersionComponent } from './version.component';

@NgModule({
  declarations: [
    VersionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    VersionComponent
  ]
})
export class EducationModule { }
