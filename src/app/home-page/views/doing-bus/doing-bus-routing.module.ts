import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoingComponent } from './doing.component';

const routes: Routes = [{
  path:'',component:DoingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoingBusRoutingModule { }
