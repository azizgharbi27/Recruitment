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
   public getall():Observable<Candidate[]>{
    return this.HttpClient.get<Candidate[]>(this.url+"");
   }
   public getAll(status:string,manager:string):Observable<Candidate[]>{
    return this.HttpClient.get<Candidate[]>(this.url+"/"+status+"/"+manager);
   }
   public get(status:string):Observable<Candidate[]>{
    return this.HttpClient.get<Candidate[]>(this.url+"/"+status);
   }
   public add(c:Candidate){
    return this.HttpClient.post(this.url+"",c);
   } 
   public putC(c:Candidate,status:string){
    return this.HttpClient.put(this.url+"/"+status+"/"+window.localStorage.getItem("user"),c);
   }
   public restoreC(c:Candidate){
    return this.HttpClient.put(this.url+"/restore",c);
   }
   public state(c:Candidate,status:string){
    return this.HttpClient.put(this.url+"/"+status,c);
   }
   public giveFeedback(c:Candidate,feedback:string){
    return this.HttpClient.put(this.url+"/feedback/"+feedback,c);
   }

}
