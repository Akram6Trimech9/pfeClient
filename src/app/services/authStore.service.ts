import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { AuthService } from './auth.service';
import { LocalStorage } from '../ts/enum';
import { CurrentUserService } from './currentUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
 refreshToken  : string | null = null ; 
 accessToken  : string | null = null ; 
 user  : any | null = null ; 

 
  get isAuthenticated(): boolean {
    return !!this.user ;
    // "coerce" means to convert one type of value into another type. In the context of the code you provided, the double negation operator (!!) is being used to coerce the value of this.user into a boolean type.
  }
  get gRefreshToken() {
   return  localStorage.getItem(LocalStorage.RefreshToken)
  }

  get gAccessToken() {
    return  localStorage.getItem(LocalStorage.AccessToken)
   }
   

  
  login(obj : any): void{
    this.setAccessToken(obj.token)
   this.setRefreshToken(obj.refreshToken)
      this.setUserInfo(obj._id)
  }
  getAccessToken(){
    return localStorage.getItem(LocalStorage.AccessToken)
  }
  setAccessToken( token : string | null ) : void {
    this.accessToken = token 
     if(!token){
       localStorage.removeItem(LocalStorage.AccessToken)
       return ; 
     }
    localStorage.setItem(LocalStorage.AccessToken , token)

  }
  setRefreshToken( token : string | null ) : void { 
    this.accessToken = token 
     if(!token){
       localStorage.removeItem(LocalStorage.RefreshToken)
       return ; 
     }
    localStorage.setItem(LocalStorage.RefreshToken , token)
  }

  setUserInfo(user : any | null): void  {
     localStorage.setItem('userId', JSON.stringify(user))
  }
  logout(): void{
      this.setAccessToken(null)
      this.setRefreshToken(null)
      this.setUserInfo(null)
  }

}