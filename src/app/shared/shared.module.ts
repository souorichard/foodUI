import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    ToolbarComponent
  ]
})
export class SharedModule { }
