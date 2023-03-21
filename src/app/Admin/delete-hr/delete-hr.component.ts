import { Component, OnInit } from '@angular/core';
import { HR } from 'src/app/hr';
import { HRService } from 'src/app/hr.service';

@Component({
  selector: 'app-delete-hr',
  templateUrl: './delete-hr.component.html',
  styleUrls: ['./delete-hr.component.scss']
})
export class DeleteHRComponent implements OnInit {
  HRS:HR[];
  id:number;
    constructor(private hrService:HRService){
      
   }
  
  
   ngOnInit(): void {
      this.hrService.getAll().subscribe(data => this.HRS=data);
      document.getElementById("state")!.style.display="block";
      
   }
  public onSubmit(){
    this.hrService.deleteM(this.id).subscribe();
    window.location.reload();
  
  }
}
