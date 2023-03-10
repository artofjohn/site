import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: '',
    component: FilmComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
