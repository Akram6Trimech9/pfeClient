import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesrdvRoutingModule } from './mesrdv-routing.module';
import {MesrdvComponent} from '../mesrdv/mesrdv/mesrdv.component'
import { HttpClientModule } from '@angular/common/http';
import { RdvService } from '../../../services/rdv.service'
import { CurrentUserService } from '../../../services/currentUser.service';
@NgModule({
  declarations: [MesrdvComponent],
  imports: [
    CommonModule,
    MesrdvRoutingModule,
    HttpClientModule
  ],
  providers:[
    RdvService,
    CurrentUserService
  ],
  exports:[
    MesrdvComponent
  ]
})
export class MesrdvModule { }
