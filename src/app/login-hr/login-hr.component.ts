import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

import { HR } from '../hr';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-login-hr',
  templateUrl: './login-hr.component.html',
  styleUrls: ['./login-hr.component.scss']
})
export class LoginHRComponent {
user:string;
password:string;
hrs:HR[]=[];
l:number;
constructor(private hrService:HRService,private router:Router,private appC:AppComponent){
  this.hrService.getAll().subscribe(data=>{this.hrs=data});
}


public onSubmit(){
  if(document.getElementById("state")!.style.display=="block" || document.getElementById("state2")!.style.display=="block"){
    alert("PLEASE LOG OUT FIRST");
  }
  else{
  let k=0;
  
       for(let i=0;i<this.hrs.length;i++){
          if((this.hrs[i].name==this.user)&&(this.hrs[i].password==this.password)){           
            k++;
            
            window.localStorage.setItem("user",this.user);
            console.log(window.localStorage.getItem("user"));
            window.location.assign('/HomeHRC');
       }
      }
       if(k==0){
        alert("wrong username or password");
      }
  }
}
}

