import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitiesRoutingModule } from './actualities-routing.module';
import { ActualitiesComponent } from './actualities/actualities.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualityService } from '../../services/actuality.service';


@NgModule({
  declarations: [ActualitiesComponent],
  imports: [
    CommonModule,
    ActualitiesRoutingModule,
    HttpClientModule
  ],
  providers:[
    ActualityService
  ]
})
export class ActualitiesModule { }
