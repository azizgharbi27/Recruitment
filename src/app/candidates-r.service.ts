import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateR } from './CandidateR';

@Injectable({
  providedIn: 'root'
})
export class CandidatesRService {

  url:String="";

  constructor (private HttpClient: HttpClient) {
    this.url="http://localhost:8080/CandidateR";
    
   }
   public delete(id:number){
    console.log("aa");
    return this.HttpClient.delete(this.url+"/"+id);
   }
   public getAll():Observable<CandidateR[]>{
    return this.HttpClient.get<CandidateR[]>(this.url+"");
    
   }
   
   public add(cr:CandidateR){
    return this.HttpClient.post(this.url+"",cr);
   }
}
