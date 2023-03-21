import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../../Manager';
import { ManagersService } from '../../managers.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {
  Managers: Manager[];
  manager:Manager;
  name:any;
  email:any;
  team:any;
  password:any;
  constructor(private MService:ManagersService,private router:Router){
     this.manager=new Manager();
  }


  ngOnInit(): void {
     this.MService.getAll().subscribe(data => this.Managers=data);
     document.getElementById("state")!.style.display="block";
  }
  

  public onSubmit(){
    

    
    this.manager.name=this.name;
    this.manager.team=this.team;
    this.manager.email=this.email;
    this.manager.password=this.password;

    this.MService.addM(this.manager).subscribe();
    window.location.reload();
    
  }

}
