import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  token!: string;
  newPassword!: string;
  confirmPassword!: string;
  error!: string;

  constructor(private route: ActivatedRoute, private router: Router, private authService : AuthService) {
    this.route.params.subscribe(params => {
      this.token = params['token']; 
      console.log(this.token, "token");
    });
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }

    this.authService.resetPassword(this.token, { password: this.newPassword }).subscribe(
      () => {
        this.error = '';
        this.router.navigate(['/login']);
      },
      (error: any) => {
        this.error = "Something went wrong";
        console.error(error);
      }
    );
  }
}
