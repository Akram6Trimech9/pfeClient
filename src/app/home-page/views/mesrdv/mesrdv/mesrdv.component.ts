import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { CurrentUserService } from '../../../../services/currentUser.service';
import { RdvService } from '../../../../services/rdv.service';

@Component({
  selector: 'app-mesrdv',
  templateUrl: './mesrdv.component.html',
  styleUrls: ['./mesrdv.component.css']
})
export class MesrdvComponent implements OnInit {
  current: any;
  rdvs: any[] = [];

  constructor(private currentUser: CurrentUserService, private rdvService: RdvService) { }

  ngOnInit(): void {
    this.currentUser.currentUser$.subscribe(res => {
      this.current = res;
      this.loadRendezvous();
    });
  }

  loadRendezvous(): void {
    if (this.current && this.current._id) {
      this.rdvService.getRdvByUser(this.current._id).subscribe(res => {
        this.rdvs = res;
      });
    }
  }
}