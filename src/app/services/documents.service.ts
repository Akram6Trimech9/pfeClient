import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';
  import { JwtHelperService } from "@auth0/angular-jwt";
import { ApiRoutes, LocalStorage } from '../ts/enum';
import { AuthStoreService } from './authStore.service';
import { CurrentUserService } from './currentUser.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  url = "http://localhost:3000/api/documents/"
  constructor(private _http:HttpClient) { }

getDocuments(): Observable<any[]>{
  return  this._http.get<any[]>(`${this.url}`)
}
}
