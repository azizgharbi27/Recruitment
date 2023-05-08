import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CandidatesService } from '../candidates.service';

import { EmailService } from '../email.service';
import { Email } from '../Email';
import { Candidate } from '../Candidate';
import { ManagersService } from '../managers.service';
import { Manager } from '../Manager';

@Component({
  selector: 'app-home-hr',
  templateUrl: './home-hr.component.html',
  styleUrls: ['./home-hr.component.scss']
})
export class HomeHRComponent implements OnInit {

  mail :Email = new Email();
  managers:Manager[];
  i:number;
  Candidates:Candidate[]=[];
  constructor(private candidateService:CandidatesService,private managersService:ManagersService , 
    private router:Router, private emailService:EmailService){
      this.managers=[];
  }

  ngOnInit(): void {
    this.candidateService.get("accepted").subscribe(data =>{this.Candidates=data});
    
    this.managersService.getAll().subscribe(data =>{this.managers=data});
    document.getElementById("state1")!.style.display="block";
    
  }


}
