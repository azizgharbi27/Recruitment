import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HR } from './hr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserLogged:boolean=true;
  url:String="";
  constructor(private HttpClient: HttpClient) {
    this.url="http://localhost:8080";
   }

   public authAd(user:string ,pass:string):string{
    
    if(user=="admin" && pass=="admin"){
      
      return "success";
      
    }
    else {
      return "fail";
    }
   }

   


   
}
