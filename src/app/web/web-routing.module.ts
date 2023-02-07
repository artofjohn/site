import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
