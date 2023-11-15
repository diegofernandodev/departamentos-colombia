import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodoGetService {

  private apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
