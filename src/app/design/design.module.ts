import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { DesignRoutingModule } from './design-routing.module';

import { DigitalDesignComponent } from './digital-design/digital-design.component';


@NgModule({
  declarations: [
    DigitalDesignComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
