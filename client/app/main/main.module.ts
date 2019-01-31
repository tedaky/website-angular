import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule
  ]
})
export class MainModule { }
