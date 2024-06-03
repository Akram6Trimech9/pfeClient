import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../../../services/currentUser.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrl: './contactez-nous.component.css'
})
export class ContactezNousComponent implements OnInit {
  email: string = "SIA@SAC.COM.TN";
  currentUser: any;

  constructor(private currentService: CurrentUserService, private router: Router) {}

  ngOnInit(): void {
    this.currentService.currentUser$.subscribe(res => {
      this.currentUser = res;
    });
  }

  takeARdv(): void {
    if (this.currentUser) {
      this.router.navigate(['/rendezvous']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous devez d\'abord créer un compte !'
      });
    }
  }
}
