import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HR } from './hr';

@Injectable({
  providedIn: 'root'
})
export class HRService {

  url:String="";
  constructor(private HttpClient: HttpClient) {
    this.url="http://localhost:8080/HR";
   }


public getAll():Observable<HR[]>{
  return this.HttpClient.get<HR[]>(this.url+"");
}

public addM(hr:HR){
  
  return this.HttpClient.post(this.url+"",hr);
}

public deleteM(id:number){
  return this.HttpClient.delete(this.url+"/"+id);
}
public updateM(id:number,hr:HR){
  return this.HttpClient.put(this.url+"/"+id,hr);
}



}
