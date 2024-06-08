import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CurrentUserService } from '../../../../../services/currentUser.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courasel',
  templateUrl: './courasel.component.html',
  styleUrls: ['./courasel.component.css']
})
export class CouraselComponent {
  constructor(private currentService: CurrentUserService, private router: Router) {}
  email: string = "SIA@SAC.COM.TN";
  currentUser: any;

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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
