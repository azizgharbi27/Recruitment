import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from 'src/app/hr';
import { HRService } from 'src/app/hr.service';

@Component({
  selector: 'app-add-hr',
  templateUrl: './add-hr.component.html',
  styleUrls: ['./add-hr.component.scss']
})
export class AddHRComponent implements OnInit {
  HRS: HR[];
  hr:HR;
  name:any;
  email:any;
  password:any;
  constructor(private hrService:HRService,private router:Router){
     this.hr=new HR();
      }


  ngOnInit(): void {
     this.hrService.getAll().subscribe(data => this.HRS=data);
     document.getElementById("state")!.style.display="block";
     
  }
  

  public onSubmit(){
    

    
    this.hr.name=this.name;
    this.hr.password=this.password;
    this.hr.email=this.email;

    this.hrService.addM(this.hr).subscribe();
    window.location.reload();
    
  }

}
