import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DigitalDesignComponent } from './digital-design/digital-design.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalDesignComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
