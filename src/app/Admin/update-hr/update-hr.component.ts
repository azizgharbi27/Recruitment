import { Component, OnInit } from '@angular/core';
import { HR } from 'src/app/hr';
import { HRService } from 'src/app/hr.service';

@Component({
  selector: 'app-update-hr',
  templateUrl: './update-hr.component.html',
  styleUrls: ['./update-hr.component.scss']
})
export class UpdateHRComponent implements OnInit {
  HRS:HR[];
hr:HR;
  id:number;
  name:string;
  email:string;
  password:string;
  constructor(private hrService:HRService){
   this.hr=new HR();
  }

  ngOnInit(): void {
    this.hrService.getAll().subscribe(data => this.HRS=data);
    document.getElementById("state")!.style.display="block";
    
 }
 public onSubmit(){
  
  this.hr.name=this.name;
  this.hr.email=this.email;
  this.hr.password=this.password;
   
  this.hrService.updateM(this.id,this.hr).subscribe();
  window.location.reload();
 }
}
