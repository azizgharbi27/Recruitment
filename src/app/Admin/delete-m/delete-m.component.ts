import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/Manager';
import { ManagersService } from 'src/app/managers.service';

@Component({
  selector: 'app-delete-m',
  templateUrl: './delete-m.component.html',
  styleUrls: ['./delete-m.component.scss']
})
export class DeleteMComponent implements OnInit {
Managers:Manager[];
id:number;

  constructor(private MService:ManagersService,private router:Router){
       
 }


 ngOnInit(): void {
    this.MService.getAll().subscribe(data => this.Managers=data);
    document.getElementById("state")!.style.display="block";
 }
public onSubmit(){
  this.MService.deleteM(this.id).subscribe();
  window.location.reload();
  

}
}
