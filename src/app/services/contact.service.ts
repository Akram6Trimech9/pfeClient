import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3000/api/contacts/"

  constructor(private _http: HttpClient ){}

  postContact(contact:  any):Observable<any>{
    return this._http.post<any>(`${this.url}`, contact)
  }

}
