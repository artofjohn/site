import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';

const routes: Routes = [
  {
    path: '',
    component: ArtComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
