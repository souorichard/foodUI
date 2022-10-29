import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [

  { path: '', component: SectionsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
