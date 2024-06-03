import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CurrentUserService } from '../services/currentUser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router , private authService: AuthService , private currentUser : CurrentUserService) {}

  signIn() {
    const payload ={
        email:this.email,
        password:this.password
    }
     this.authService.login(payload).subscribe(res=>{
     if(res.token){
      this.currentUser.setCurrentUser()
      this.router.navigate(['/'])
     }
    })  
  }
}
