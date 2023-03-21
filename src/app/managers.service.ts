import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from './Manager';
@Injectable({
  providedIn: 'root'
})
export class ManagersService {

url:String="";
  constructor(private HttpClient: HttpClient) {
    this.url="http://localhost:8080/managers";
   }


public getAll():Observable<Manager[]>{
  return this.HttpClient.get<Manager[]>(this.url+"");
}

public addM(m:Manager){
  
  return this.HttpClient.post(this.url+"",m);
}

public deleteM(id:number){
  return this.HttpClient.delete(this.url+"/"+id);
}
public updateM(id:number,m:Manager){
  return this.HttpClient.put(this.url+"/"+id,m);

}
}
