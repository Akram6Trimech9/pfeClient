import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RdvService } from '../../../../services/rdv.service';

@Component({
  selector: 'app-rendez-vous-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2>{{ rdv.name }}</h2>
       </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p><strong>Activity:</strong> {{ rdv.activity }}</p>
            <p><strong>City:</strong> {{ rdv.city }}</p>
            <p><strong>Company:</strong> {{ rdv.company }}</p>
            <p><strong>Country:</strong> {{ rdv.country }}</p>
            <p><strong>Date:</strong> {{ rdv.date | date: 'yyyy-MM-dd' }}</p>
            <p><strong>Email:</strong> {{ rdv.email }}</p>
          </div>
          <div class="col-md-6">
            <p><strong>Employees:</strong> {{ rdv.employees }}</p>
            <p><strong>Legal Form:</strong> {{ rdv.legalForm }}</p>
            <p><strong>Location:</strong> {{ rdv.location }}</p>
            <p><strong>Message:</strong> {{ rdv.message }}</p>
            <p><strong>Phone:</strong> {{ rdv.phone }}</p>
            <p><strong>Position:</strong> {{ rdv.position }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p><strong>Purchase Invoices:</strong> {{ rdv.purchaseInvoices }}</p>
            <p><strong>Sales Invoices:</strong> {{ rdv.salesInvoices }}</p>
            <p><strong>Start Date:</strong> {{ rdv.startDate | date: 'yyyy-MM-dd' }}</p>
          </div>
          <div class="col-md-6">
            <p><strong>Status:</strong> {{ rdv.status }}</p>
            <p><strong>Turnover:</strong> {{ rdv.turnover }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   <button class="idbutton" (click)="closeModal()">close</button>`,
  styleUrl: './rendez-vous-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RendezVousModalComponent {
  rdv : any
  constructor( public dialogRef: MatDialogRef<RendezVousModalComponent>,  private rdvService : RdvService , 
    @Inject(MAT_DIALOG_DATA) public data: any
  ){ 
    this.rdvService.getRdvById(data.rdv).subscribe(res=>{
     this.rdv=res
    })
  }
  closeModal(){
     this.dialogRef.close()
  }
 }
