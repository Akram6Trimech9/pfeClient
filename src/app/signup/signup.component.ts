import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder , private userService:AuthService , private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const record = {
        firstName: this.signupForm.value.name,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        mobile: this.signupForm.value.mobile,
        password: this.signupForm.value.password,
        address: this.signupForm.value.address, 
        birthdate: this.signupForm.value.birthdate,
        gender: this.signupForm.value.gender,
       };
  
      this.userService.register(record).subscribe(res=>{
        if(res.firstName){
          this.router.navigate(['/login']);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  res.message  
          });
        }
      })
    } else {
      console.log(this.signupForm.value);
    }
  }
}
