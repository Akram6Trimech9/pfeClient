import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verification-account',
  templateUrl: './verification-account.component.html',
  styleUrls: ['./verification-account.component.scss']
})
export class VerificationAccountComponent implements OnInit {
  token!: string;

  constructor(private route: ActivatedRoute,private router : Router ,  private  authService :AuthService) { }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.token = params['token'];
     });
     this.verificationAccount()
  }

   verificationAccount() { 
    this.authService.verifiedAccount(this.token).subscribe(res => { 
        if(res){
           this.router.navigate(['/'])
        }
    })
   }
}
