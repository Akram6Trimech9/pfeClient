import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
  import { JwtHelperService } from "@auth0/angular-jwt";
import { ApiRoutes, LocalStorage } from '../ts/enum';
import { AuthStoreService } from './authStore.service';
import { CurrentUserService } from './currentUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = "http://localhost:3000/api"

  constructor(private _http: HttpClient , private _authStore: AuthStoreService) { }

  helper = new JwtHelperService();
  
  IsUserExist(email: string): Observable<boolean> {
    return this._http.get(`${ApiRoutes.UserInfo}/${email}`).pipe(
    map((response: any ) => {
     const userExists = response && response.email === email ;
    return userExists;
    })
    );
    }

  confirm(token : any ) : Observable<any>{
    return  this._http.post<any>(ApiRoutes.confirmEmail, token)
    .pipe(
      map( (credentials: any) => { 
        this._authStore.login(credentials)        
         return credentials ; 
      })
    )
  }
  

  login(payload :  any) : Observable<any>{
    return  this._http.post<any>(`${this.url}${ApiRoutes.login}`, payload)
    .pipe(
      map( (credentials: any) => { 
        this._authStore.login(credentials)
          return credentials ; 
      })
    )
  }

  register(payload: any): Observable<any> {
    return this._http.post<any>(`${this.url}${ApiRoutes.register}`, payload).pipe(
      map((user: any) => {
        if (user.isEmailConfirmed) {
          console.log('User email  already confirmed');
        }
        return user;
      })
    );
  }
  
  logout(){
    this._authStore.logout()

    // return    this._http.get(`${this.url}${ApiRoutes.logout}`).pipe(
    //    map(()=>{              
    //    })
    // )
  }

  getUserInfo(): Observable<any> {
    let token:any=localStorage.getItem(LocalStorage.AccessToken)
    let decodeToken=this.helper.decodeToken(token)
     return this._http.get<any>(`${this.url}${ApiRoutes.UserInfo}/${decodeToken.id}`).pipe(
      map((user: any) => {
        this._authStore.setUserInfo(user);
        return user;
      })
    );
  }
  // refreshToken(): Observable<tokenInterface> {    
  //   const headers = {
  //     [AUTHORIZATION_HEADER_KEY]: `${AUTHORIZATION_HEADER_PREFIX} ${this._authStore.gRefreshToken}`,
  //   };
    
  //   return this._http.get<tokenInterface>(ApiRoutes.Refresh, { headers }).pipe(
  //     map(({ accessToken, refreshToken }: tokenInterface) => {
  //       this._authStore.setAccessToken(accessToken);
  //       this._authStore.setRefreshToken(refreshToken);
  //       return { accessToken, refreshToken };
  //     })
  //   );
  // }
  get hasAccessToken(): boolean {
    return !!this._authStore.gAccessToken;
  }
  get getUser(){
    return  this.getUserInfo()
   } 


   sendResetPassword(email : any ){ 
    return   this._http.post(ApiRoutes.resetPasssend , email)
   } 
   updateUser(user :any,id:any): Observable<any>{
    return this._http.put<any>(`${this.url}${ApiRoutes.updateUser}/${id}`, user) 
   }
  
  //  changePasswordConfirm(obj: any): Observable<any> {
  //   const headers = {
  //     [AUTHORIZATION_HEADER_KEY]: `${AUTHORIZATION_HEADER_PREFIX} ${obj.token}`,
  //   };        
  //   let decodeToken = this.helper.decodeToken(obj.token);
  //   const email = decodeToken.email;
  //   const record = {
  //     email: email, 
  //     password: obj.password
  //   };
  
  //   return this._http.patch(ApiRoutes.updatePassword, record, { headers });
  // }
  

}