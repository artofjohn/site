import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
