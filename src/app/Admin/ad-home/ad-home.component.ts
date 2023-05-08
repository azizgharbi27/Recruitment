import { Component } from '@angular/core';
import { Manager } from '../../Manager';
import { ManagersService } from '../../managers.service';

@Component({
  selector: 'app-ad-home',
  templateUrl: './ad-home.component.html',
  styleUrls: ['./ad-home.component.scss']
})
export class AdHomeComponent {
  
  
  constructor(){
    document.getElementById("state")!.style.display="block";
  }
 
}