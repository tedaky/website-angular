import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { SkillModule } from '../skill/skill.module';
import { ExperienceModule } from '../experience/experience.module';
import { EducationModule } from '../education/education.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    SkillModule,
    ExperienceModule,
    EducationModule
  ]
})
export class MainModule { }
