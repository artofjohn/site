import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './art/art.component';


@NgModule({
  declarations: [
    ArtComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
