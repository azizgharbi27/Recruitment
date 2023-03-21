import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Manager } from '../Manager';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-login-man',
  templateUrl: './login-man.component.html',
  styleUrls: ['./login-man.component.scss']
})
export class LoginManComponent {
  user:string;
  password:string;
  managers:Manager[];
  l:number;
  constructor(private mService:ManagersService,private router:Router){
    this.mService.getAll().subscribe(data=>{this.managers=data});
  }
  
  public onSubmit(){
    
    if(document.getElementById("state")!.style.display=="block" || document.getElementById("state1")!.style.display=="block"){
      alert("PLEASE LOG OUT FIRST");
    }
    else{
      let k=0;
         for(let i=0;i<this.managers.length;i++){
            if((this.managers[i].name==this.user)&&(this.managers[i].password==this.password)){
              document.getElementById("state2")!.style.display="block";
              this.router.navigate(['/HomeManC']);
              k++;
            }
         }
         if(k==0){
          alert("wrong username or password");
        }
      }
      }
}
