import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CandidatesService } from '../candidates.service';

import { EmailService } from '../email.service';
import { Email } from '../Email';
import { Candidate } from '../Candidate';

@Component({
  selector: 'app-home-hr',
  templateUrl: './home-hr.component.html',
  styleUrls: ['./home-hr.component.scss']
})
export class HomeHRComponent implements OnInit {

  mail :Email = new Email();

  i:number;
  Candidates:Candidate[];
  constructor(private candidateService:CandidatesService, 
    private router:Router, private emailService:EmailService){

  }

  ngOnInit(): void {
    this.candidateService.get("accepted").subscribe(data =>{this.Candidates=data});
    document.getElementById("state1")!.style.display="block";
    
  }

book(c:Candidate){
  this.mail.message=("welcome "+c.fullname+" we have planned an interview for you on Friday with Mr."+c.manager);
  this.mail.email=c.email;
  this.mail.name="interview";
  this.emailService.sEmail(this.mail).subscribe(data => console.log(data));
  this.candidateService.putC(c,"booked").subscribe();
  window.location.reload();
}
}
