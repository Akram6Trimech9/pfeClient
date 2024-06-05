import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../services/currentUser.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit { 
  email : string = ' SIA@SAC.COM.TN'

  currentUser: any;
  constructor(public loader : LoaderService ,private router : Router , private currentUSer : CurrentUserService , private authService :AuthService){ }
   ngOnInit(): void {
    this.loader.showLoader()
    setTimeout(() => {
       this.loader.hideLoader()
    }, 1000);

    this.currentUSer.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
   }

   navigateWithQuery(url: string, query: string) {
    this.router.navigate([url], { queryParams: { query: query } });
  }

  logout(){

    this.authService.logout()
    this.router.navigate(['/'])
    window.location.reload();

  }
  takeMeToActivity(){
      this.router.navigateByUrl('/actualite')
 
  } 
}
