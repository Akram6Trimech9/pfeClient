import { Routes } from '@angular/router';
 
export const routes: Routes = [
         { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) } ,
         { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) } ,
         { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) } ,
 

 ];
