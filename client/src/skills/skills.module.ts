import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
