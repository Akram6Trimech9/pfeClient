import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RdvService } from '../../../services/rdv.service';
import { CurrentUserService } from '../../../services/currentUser.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
  rendezvousForm: FormGroup;
  user: any;
  isSended: boolean = false;

  constructor(private fb: FormBuilder, private rdvService: RdvService, private currentUser: CurrentUserService) {
    this.rendezvousForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      message: [''],
      startDate: ['', Validators.required],
      activity: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],  
      company: ['', Validators.required],  
      phone: ['', Validators.required], 
      country: ['', Validators.required], 
      position: ['', Validators.required], 
      legalForm: ['', Validators.required],
      employees: ['', Validators.required],
      turnover: ['', Validators.required],
      salesInvoices: ['', Validators.required],
      purchaseInvoices: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUser.currentUser$.subscribe(res => {
      this.user = res;
    });
  }

  onSubmit(): void {
    this.isSended = true;

       this.rdvService.postRdv(this.rendezvousForm.value, this.user._id).subscribe(res => {
           this.isSended = true;
       });
   }
}
