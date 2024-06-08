import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
  import { JwtHelperService } from "@auth0/angular-jwt";
 
@Injectable({
  providedIn: 'root'
})
export class ActualityService {
  url = "http://localhost:3000/api"

  constructor(private _http: HttpClient) { }


  getActtualities() :Observable<any[]>{
     return  this._http.get<any[]>(`${this.url}/actuality`)
  }

  getOneActuality(id:any) : Observable<any>{
     return this._http.get<any>(`${this.url}/actuality/${id}`)
  }

}
