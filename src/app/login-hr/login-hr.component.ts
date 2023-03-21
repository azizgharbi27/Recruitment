import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
constructor(private hrService:HRService,private router:Router){
  this.hrService.getAll().subscribe(data=>{this.hrs=data});
}


public onSubmit(){
  if(document.getElementById("state")!.style.display=="block" || document.getElementById("state2")!.style.display=="block"){
    alert("PLEASE LOG OUT FIRST");
  }
  else{
  let k=0;
  
       for(let hr of this.hrs){
          if((hr.name==this.user)&&(hr.password==this.password)){           
            k++;
            this.router.navigate(['/HomeHRC']);
            document.getElementById("state1")!.style.display="block";
          }
       }
       if(k==0){
        alert("wrong username or password");
      }
  }
}
}

