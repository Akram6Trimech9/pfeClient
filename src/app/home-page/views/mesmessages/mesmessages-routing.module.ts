import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesmessagesComponent } from './mesmessages/mesmessages.component';

const routes: Routes = [{ 
  path:'',component:MesmessagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesmessagesRoutingModule { }
