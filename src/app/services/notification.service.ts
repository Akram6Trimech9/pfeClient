import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket: Socket;
   url='http://localhost:3000/api/notifications'
  constructor(private _http: HttpClient) {
    this.socket = io('http://localhost:3000');  
  }

  getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('rdv-created', (data:any) => {
        console.log("Received new appointment:", data);
        observer.next(data);
      });
      return () => {
        this.socket.off('rdv-created');
      };
    });
  }
  

  getNotificationByUserId(id:any) :Observable<any[]>{
     return this._http.get<any[]>(`${this.url}/${id}`)
  }
  connectToServer() {
    this.socket.emit('connection', { token: 'kjqlkjqsd' });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}