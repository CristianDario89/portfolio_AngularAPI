import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  /* url:string="http://localhost:8090/portfolio/"*/
  
  constructor(private http: HttpClient) { }

 
}
