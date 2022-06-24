import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})
export class skillservice { 
  constructor(private http: HttpClient) { }
 
}
