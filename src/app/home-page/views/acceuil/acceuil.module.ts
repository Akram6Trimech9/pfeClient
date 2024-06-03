import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';
import { CouraselComponent } from './shared/courasel/courasel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './shared/about/about.component';
import { ServiceComponent } from './shared/service/service.component';
import { ValeurComponent } from './shared/valeur/valeur.component';
import { ContactezNousComponent } from './shared/contactez-nous/contactez-nous.component';


@NgModule({
  declarations: [ContactezNousComponent,AcceuilComponent , CouraselComponent,AboutComponent,ServiceComponent,ValeurComponent],
  imports: [
    CommonModule,
    CarouselModule, 
    AcceuilRoutingModule
  ]
})
export class AcceuilModule { }
