import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationAccountComponent } from './verification-account/verification-account.component';

const routes: Routes = [{ 
  path:'',component:VerificationAccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationAccountRoutingModule { }
