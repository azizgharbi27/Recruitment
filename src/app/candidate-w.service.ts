import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateW } from './CandidateW';

@Injectable({
  providedIn: 'root'
})
export class CandidateWService {

  url:String="";
  constructor (private HttpClient: HttpClient) {
    this.url="http://localhost:8080/candidatesW";
   }
   
   public getAll():Observable<CandidateW[]>{
    return this.HttpClient.get<CandidateW[]>(this.url+"");
   }

   public add(cw:CandidateW){
    return this.HttpClient.post(this.url+"",cw);
   }
}
