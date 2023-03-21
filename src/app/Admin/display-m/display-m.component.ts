import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/Manager';
import { ManagersService } from 'src/app/managers.service';

@Component({
  selector: 'app-display-m',
  templateUrl: './display-m.component.html',
  styleUrls: ['./display-m.component.scss']
})
export class DisplayMComponent implements OnInit {
Managers:Manager[]
  constructor(private MService:ManagersService){}

  ngOnInit(): void {
    this.MService.getAll().subscribe(data => this.Managers=data);
    document.getElementById("state")!.style.display="block";
    }
}
