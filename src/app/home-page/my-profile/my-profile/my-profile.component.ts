import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentUserService } from '../../../services/currentUser.service';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { RdvService } from '../../../services/rdv.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profileForm!: FormGroup;
  newPassword!: string ; 
  confirmPassword!:string ; 
  constructor(
    private formBuilder: FormBuilder,
    private currentUser: CurrentUserService,
    private authService : AuthService,
    private rdvService: RdvService
  ) {}
 user : any
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
    this.currentUser.currentUser$.subscribe(res => {
      this.current = res;
      this.loadRendezvous();
    });
     this.currentUser.currentUser$.subscribe(res => {
      this.user = res
      if (res) {
        this.profileForm.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          mobile: res.mobile,
          gender: res.gender,
          address: res.address,
          birthdate: res.birthdate
        });
      }
    });
  }
  current: any;
  rdvs!: any[] ;

 
 

  loadRendezvous(): void {
    if (this.current && this.current._id) {
      this.rdvService.getRdvByUser(this.current._id).subscribe(res => {
        this.rdvs = res;
      });
    }
  }
  updateUserProfile(): void {
    if (this.profileForm.valid) {
      this.authService.updateUser(this.profileForm.value, this.user._id).subscribe(
        (response) => {
           Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Profile updated successfully'
          });
        },
        (error) => {
           Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update profile'
          });
        }
      );
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
    messages :any[] = [
    {
      'date': '2024-06-08 10:30:00',
      'content': 'Hello! How are you today?'
    },
    {
      date: '2024-06-08 11:45:00',
      content: 'I m doing well, thank you! How about you?'
    },
    {
      date: '2024-06-08 12:15:00',
      content: 'I m good too. Just working on some coding projects.'
    }
  ];

  updatePassword(){ 
      this.authService.updatePassword(this.newPassword,this.user._id).subscribe(res=>{
        Swal.fire({
          title: "Good job!",
          text: "passsword changed",
          icon: "success"
        });
      })
  }
  
}