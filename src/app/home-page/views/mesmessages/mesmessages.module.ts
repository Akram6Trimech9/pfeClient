import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesmessagesRoutingModule } from './mesmessages-routing.module';
import {MesmessagesComponent} from '../mesmessages/mesmessages/mesmessages.component'

@NgModule({
  declarations: [MesmessagesComponent],
  imports: [
    CommonModule,
    MesmessagesRoutingModule,
  ]
})
export class MesmessagesModule { }
