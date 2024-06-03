import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentUserService } from '../../../services/currentUser.service';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private currentUser: CurrentUserService,
    private authService : AuthService
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
}