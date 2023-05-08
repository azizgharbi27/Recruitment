import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Recrutement';
  UserLogged:string=window.localStorage.getItem("user")!;

  constructor(private router:Router){
  
  
  }
  
  public onClick(){
    document.getElementById("state")!.style.display="none";
        this.router.navigate(['/']);
  }
  public onClick1(){
    document.getElementById("state1")!.style.display="none";
        this.router.navigate(['/']);
  }
  public onClick2(){
    document.getElementById("state2")!.style.display="none";
    
        this.router.navigate(['/']);
  }
  public home(){
    this.router.navigate(['/']);
    //document.getElementById("state")!.style.display="none";
    //document.getElementById("state1")!.style.display="none";
    //document.getElementById("state2")!.style.display="none";
    
  }

  

  
}
