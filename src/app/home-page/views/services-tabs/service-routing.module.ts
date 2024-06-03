import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesTabsComponent } from './services-tabs.component';

const routes: Routes = [{
  path:"",component:ServicesTabsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
