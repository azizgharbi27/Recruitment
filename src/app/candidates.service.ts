import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './Candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  url:String="";

  constructor (private HttpClient: HttpClient) {
    this.url="http://localhost:8080/Candidate";
    
   }
   public delete(id:number){
    
    return this.HttpClient.delete(this.url+"/"+id);
   }
   public getAll():Observable<Candidate[]>{
    return this.HttpClient.get<Candidate[]>(this.url+"");
   }
   public add(c:Candidate){
    return this.HttpClient.post(this.url+"",c);
   }
}
