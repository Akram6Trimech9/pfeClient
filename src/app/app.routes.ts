import { Routes } from '@angular/router';
 
export const routes: Routes = [
         { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) } ,
         { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) } ,
         { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) } ,
         { path: 'forgot', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) } ,
         { path: 'reset/token/:token', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) } ,
         { path: 'validate/:token', loadChildren: () => import('./verification-account/verification-account.module').then(m => m.VerificationAccountModule) } ,


 ];
