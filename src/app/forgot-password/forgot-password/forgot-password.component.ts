import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email!: string;
  message!: string;

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.sendResetPassword({email:this.email}).subscribe(
      (res) => {
         if (res) {
          this.message = "An email has been sent. Please check your email.";
        } else {
         }
      },
      (error) => {
       }
    );
  }
}
