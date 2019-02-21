import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SkillComponent } from './skill.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { SkillItemComponent } from './skill-item/skill-item.component';

@NgModule({
  declarations: [
    SkillComponent,
    SkillGroupComponent,
    SkillItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SkillComponent
  ]
})
export class SkillModule { }
