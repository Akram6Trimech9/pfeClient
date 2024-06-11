import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
