import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router : Router,private authS:AuthService){}
  
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
}