import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitiesRoutingModule } from './actualities-routing.module';
import { ActualitiesComponent } from './actualities/actualities.component';


@NgModule({
  declarations: [ActualitiesComponent],
  imports: [
    CommonModule,
    ActualitiesRoutingModule
  ]
})
export class ActualitiesModule { }
