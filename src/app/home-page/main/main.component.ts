import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../services/currentUser.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { RendezVousModalComponent } from './modal-rendez/rendez-vous-modal/rendez-vous-modal.component';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit { 
  email : string = ' SIA@SAC.COM.TN'
  notification!:any[]
 
  currentUser: any;
  constructor(public dialog: MatDialog,public loader : LoaderService ,private router : Router , private currentUSer : CurrentUserService , private authService :AuthService,private notifService : NotificationService){ }
   ngOnInit(): void {
    this.loader.showLoader()
    setTimeout(() => {
       this.loader.hideLoader()
    }, 1000);

    this.currentUSer.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.notifService.getNotificationByUserId(this.currentUser._id).subscribe(res =>{ 
      this.notification =res
   })
   this.notifService.getMessages().subscribe(res=>{
    this.notification.push(res.notification)
    })
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
  openDialog(item : any){ 
     this.dialog.open(RendezVousModalComponent,{
        data:item
     })
  }
}
