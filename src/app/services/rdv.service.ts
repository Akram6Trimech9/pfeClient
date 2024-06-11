
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../ts/enum';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  url = "http://localhost:3000/api"

  constructor(private _http: HttpClient ){}

 

  postRdv(payload : any,id:any):Observable<any>{ 
    return this._http.post(`${this.url}${ApiRoutes.rdv}${id}`,payload)
  }
  getRdvByUser( id : any) :Observable<any>{ 
    return this._http.get<any>(`${this.url}${ApiRoutes.rdv}user/${id}`)
  }
  getRdvById( id : any) :Observable<any>{ 
    return this._http.get<any>(`${this.url}${ApiRoutes.rdv}${id}`)
  }
  getMessageByEmail(email : string) : Observable<any>{
     return  this._http.get<any>(`${this.url}/message/email/${email}`)
  }

  deleteRdvById(id : any) : Observable<any>{ 
     return  this._http.delete<any>( `${this.url}${ApiRoutes.rdv}${id}`)
  }
}
