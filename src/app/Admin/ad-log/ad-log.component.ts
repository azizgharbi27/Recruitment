import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Manager } from '../../Manager';
import { ManagersService } from '../../managers.service';


@Component({
  selector: 'app-ad-log',
  templateUrl: './ad-log.component.html',
  styleUrls: ['./ad-log.component.scss']
})
export class AdLogComponent {

  user:any;
  password:any;
  res:string;
  constructor(private authS:AuthService ,private router:Router)
    {}
        

   
    onSubmit(){
       if(document.getElementById("state1")!.style.display=="block" || document.getElementById("state2")!.style.display=="block"){
        alert("PLEASE LOG OUT FIRST");
      }

    else{
       if (this.authS.authAd(this.user,this.password)=="success"){
      document.getElementById("state")!.style.display="block";
        this.router.navigate(['/AdHomeC']);

      }
      else{
        
        alert("username or password incorrect");
         
      }
    }
}
}