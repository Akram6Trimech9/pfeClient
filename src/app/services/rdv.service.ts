
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
}
