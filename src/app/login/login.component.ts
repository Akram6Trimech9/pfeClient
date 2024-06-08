import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CurrentUserService } from '../services/currentUser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
 verifyAccount : Boolean = false ; 
  idUser!: any

  constructor(private router: Router , private authService: AuthService , private currentUser : CurrentUserService) {}
  signIn() {
    const payload ={
        email:this.email,
        password:this.password
    }
     this.authService.login(payload).subscribe(
       (res) => {
        this.idUser= res._id
        if(res.isBlocked === true){
          this.verifyAccount = true
        }else{ 
          if(res.token){
            this.currentUser.setCurrentUser()
            this.router.navigate(['/'])
          }else{
           Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text:  res.message  
           });
          }
        }
         
       },
       (error) => {
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: error.error.message  
         });
       }
     );
  }
  sendVerificationLink(){ 
    this.authService.sendVerification(this.idUser).subscribe(res=>{ 

    })
  }
}
