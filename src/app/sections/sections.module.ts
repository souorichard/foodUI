import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule
  ]
})
export class SectionsModule { }
