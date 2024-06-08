import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationAccountRoutingModule } from './verification-account-routing.module';
import {VerificationAccountComponent} from './verification-account/verification-account.component'

@NgModule({
  declarations: [VerificationAccountComponent],
  imports: [
    CommonModule,
    VerificationAccountRoutingModule
  ]
})
export class VerificationAccountModule { }
