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
  messages :any
  user : any
  current: any;
  rdvs: any ;
  constructor(
    private formBuilder: FormBuilder,
    private currentUser: CurrentUserService,
    private authService : AuthService,
    private rdvService: RdvService
  ) {}

  ngOnInit(): void {
    this.currentUser.currentUser$.subscribe(async res => {
      this.current = await res;
      await this.loadRendezvous();
      await this.loadMessages();
      this.user = res; // Move this line here
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
  
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }
  

 
 

  loadRendezvous(): void {
       this.rdvService.getRdvByUser(this.current._id).subscribe(res => {
        this.rdvs = res;
      });
   }
   loadMessages(): void{
      this.rdvService.getMessageByEmail(this.current.email).subscribe(res=>{ 
           this.messages = res
      })
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
  updatePassword(){ 
      this.authService.updatePassword(this.newPassword,this.user._id).subscribe(res=>{
        Swal.fire({
          title: "Good job!",
          text: "passsword changed",
          icon: "success"
        });
      })
  }
  deleteRdv(id: any){ 
    this.rdvService.deleteRdvById(id).subscribe(res => {
      if(res){
        this.rdvs = this.rdvs.filter((item: any) => item._id !== id);
      }
    });
  }
  getRdv(){
     this.loadRendezvous()
  }
  
}