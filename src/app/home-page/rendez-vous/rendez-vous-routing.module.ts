import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezvousComponent } from './rendezvous/rendezvous.component';

const routes: Routes = [{
  path:'',component:RendezvousComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }
