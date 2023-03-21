import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './Candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  url:String="";
  constructor (private HttpClient: HttpClient) {
    this.url="http://localhost:8080/candidates";
   }
   
   public getAll():Observable<Candidate[]>{
    return this.HttpClient.get<Candidate[]>(this.url+"");
   }
}
