import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LienUtilsRoutingModule } from './lien-utils-routing.module';
import { LienComponent } from './lien/lien.component';


@NgModule({
  declarations: [LienComponent],
  imports: [
    CommonModule,
    LienUtilsRoutingModule
  ]
})
export class LienUtilsModule { }
