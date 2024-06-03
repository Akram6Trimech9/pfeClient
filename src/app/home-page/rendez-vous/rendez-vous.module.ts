import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RendezVousRoutingModule } from './rendez-vous-routing.module';
 import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RendezvousComponent],
  imports: [
    CommonModule,
       RendezVousRoutingModule,
       FormsModule,
       ReactiveFormsModule,
       MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatButtonModule,
      MatIconModule
  ]
})
export class RendezVousModule { }
