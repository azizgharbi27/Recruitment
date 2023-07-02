import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CandidatesService } from '../candidates.service';
import { HR } from '../hr';
import { Manager } from '../Manager';
import { ManagersService } from '../managers.service';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:string;
  password:string;
  hrs:HR[]=[];
  managers:Manager[]=[];
  l:number;
  
  constructor(private router : Router,private authS:AuthService,private candidateService:CandidatesService,private manService:ManagersService
    ,private hrService: HRService ){
      this.hrService.getAll().subscribe(data=>{this.hrs=data});
      this.manService.getAll().subscribe(data=>{this.managers=data});
      history.pushState(null, '');
      document.getElementById("state")!.style.display="none";
    document.getElementById("state1")!.style.display="none";
    document.getElementById("state2")!.style.display="none";
  }
  
  
  public click(){
    if( document.getElementById("state")!.style.display=="block"){
      this.router.navigate(['/AdHomeC']);

  }
  
  else{
    this.router.navigate(['/AdLogC']);
  }
}


public click1(){
  if( document.getElementById("state1")!.style.display=="block"){
    this.router.navigate(['/HomeHRC']);

}
else{
  this.router.navigate(['/LoginHRC']);
}
}


public click2(){
  if( document.getElementById("state2")!.style.display=="block"){
    this.router.navigate(['/HomeManC']);

}
else{
  this.router.navigate(['/LoginManC']);
}
}





public onSubmit(){
  console.log(this.hrs[1].name);
 
  
  if(this.user == undefined || this.password == undefined || this.user == "" || this.password == ""){
    alert("Missing fields");
  }
  else{
    if(this.user=="admin" && this.password=="admin123!"){
      window.localStorage.setItem("user",this.user);
      console.log(window.localStorage.getItem("user"));
      window.location.assign('/AdHomeC');
    }
    
    else{
        let k=0;
        
      for(let i=0;i<this.hrs.length ;i++){
         if((this.hrs[i].name == this.user)&&(this.hrs[i].password==this.password)){           
         k++;
         console.log("aaaaaa");
         window.localStorage.setItem("user",this.user);
         console.log(window.localStorage.getItem("user"));
         window.location.assign('/HomeHRC');
    }
    for(let i=0;i<this.hrs.length ;i++){
      console.log(this.hrs);
     if((this.managers[i].name==this.user)&&(this.managers[i].password==this.password)){           
      k++;
      
      window.localStorage.setItem("user",this.user);
      console.log(window.localStorage.getItem("user"));
      
      window.location.assign('/HomeManC');
     }
   }
  }
  if(k==0){
    alert("wrong username or password");
  }
}
}
}
}