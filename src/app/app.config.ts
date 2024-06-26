import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 import { AuthService } from './services/auth.service';
import { CurrentUserService } from './services/currentUser.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), 
    provideToastr(), 
    provideHttpClient(withFetch()), provideAnimationsAsync(),

  ],
 };
