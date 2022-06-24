import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  constructor(private http: HttpClient) { }

 
}
