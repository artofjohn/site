import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web/web.component';


@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebRoutingModule
  ]
})
export class WebModule { }
