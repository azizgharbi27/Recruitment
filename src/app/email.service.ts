import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './Email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/email';

  sEmail(email :Email,date:Date): Observable<any> {
    return this.http.post(`${this.baseUrl}`+"/"+date, email);
  }
  sNormalEmail(email :Email): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }
  

}