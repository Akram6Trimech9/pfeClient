import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent , children:[
    { path: '', loadChildren: () => import('./views/acceuil/acceuil.module').then(m => m.AcceuilModule) } ,
    { path: 'about', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule) } ,
    { path: 'doingBus', loadChildren: () => import('./views/doing-bus/doing-bus.module').then(m => m.DoingBusModule) } ,
    { path: 'documentation', loadChildren: () => import('./views/documentation/documentation.module').then(m => m.DocumentationModule) } ,
    { path: 'liens', loadChildren: () => import('./views/lien-utils/lien-utils.module').then(m => m.LienUtilsModule) } ,
    { path: 'actualite', loadChildren: () => import('./actualities/actualities.module').then(m => m.ActualitiesModule) } ,
    { path: 'blog/:id', loadChildren: () => import('./views/blog-details/blog-details.module').then(m => m.BlogDetailsModule) } ,
    { path: 'contacteznous', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule) } ,
    { path: 'rendezvous', loadChildren: () => import('./rendez-vous/rendez-vous.module').then(m => m.RendezVousModule) } ,
    { path: 'service', loadChildren: () => import('./views/services-tabs/service.module').then(m => m.ServiceModule) } ,
    { path: 'profile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) } ,
    { path: 'mesrdv', loadChildren: () => import('./views/mesrdv/mesrdv.module').then(m => m.MesrdvModule) } ,

]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
