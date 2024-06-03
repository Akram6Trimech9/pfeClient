import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoingBusRoutingModule } from './doing-bus-routing.module';
import { DoingComponent } from './doing.component';


@NgModule({
  declarations: [DoingComponent],
  imports: [
    CommonModule,
    DoingBusRoutingModule
  ]
})
export class DoingBusModule { }
