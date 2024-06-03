import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CurrentUserService } from './services/currentUser.service';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule,HttpClientModule,SweetAlert2Module],
  providers:[CurrentUserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pfeClient';
 constructor(private current : CurrentUserService
 ){}
  ngOnInit(): void {
    this.current.setCurrentUser()
  }
}
