import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './conact.component.html',
  styleUrls: ['./conact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  messageSent: boolean = false;

  constructor(private fb: FormBuilder , private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.messageSent = true;
    if (this.contactForm.valid) {
      this.contactService.postContact(this.contactForm.value).subscribe(res=>{
            if(res){
              this.messageSent = true;
            }
      })
    }
  }
}
