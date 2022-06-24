import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService { 
  constructor(private http: HttpClient) { }
/*
  getUser(user: User): Observable<object> {
    console.log(user);
    return this.http.post(this.URL, user);
  }*/
 
}
