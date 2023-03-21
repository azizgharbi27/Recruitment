import { Component, OnInit } from '@angular/core';
import { HR } from 'src/app/hr';
import { HRService } from 'src/app/hr.service';

@Component({
  selector: 'app-display-hr',
  templateUrl: './display-hr.component.html',
  styleUrls: ['./display-hr.component.scss']
})
export class DisplayHRComponent implements OnInit {
HRS:HR[];
constructor(private hrService:HRService){}

  ngOnInit(): void {
    this.hrService.getAll().subscribe(data=>{this.HRS=data});
    document.getElementById("state")!.style.display="block";
  }
}
