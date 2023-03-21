import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Manager } from 'src/app/Manager';
import { ManagersService } from 'src/app/managers.service';

@Component({
  selector: 'app-update-m',
  templateUrl: './update-m.component.html',
  styleUrls: ['./update-m.component.scss']
})
export class UpdateMComponent implements OnInit {

  Managers:Manager[];
  manager:Manager;
  id:number;
  name:string;
  email:string;
  team:string;
  password:string;
  constructor(private MService:ManagersService,private authS:AuthService){
   this.manager=new Manager();
  }

  ngOnInit(): void {
    this.MService.getAll().subscribe(data => this.Managers=data);
    document.getElementById("state")!.style.display="block";
    
 }
 public onSubmit(){
  
  this.manager.name=this.name;
  this.manager.email=this.email;
  this.manager.team=this.team;
  this.manager.password=this.password;
   
  this.MService.updateM(this.id,this.manager).subscribe();
  location.reload();
  
 }
}
