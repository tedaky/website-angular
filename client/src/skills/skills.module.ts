import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SkillsComponent } from './skills.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillGroupComponent,
    SkillComponent
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
