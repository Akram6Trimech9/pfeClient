import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
