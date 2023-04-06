import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateWService } from '../candidate-w.service';
import { CandidatesService } from '../candidates.service';
import { CandidateW } from '../CandidateW';
import { EmailService } from '../email.service';
import { Email } from '../Email';

@Component({
  selector: 'app-home-hr',
  templateUrl: './home-hr.component.html',
  styleUrls: ['./home-hr.component.scss']
})
export class HomeHRComponent implements OnInit {

  mail :Email = new Email();

  i:number;
  Candidates:CandidateW[];
  constructor(private candidateService:CandidateWService,private candidateWService:CandidateWService, 
    private router:Router, private emailService:EmailService){

  }

  ngOnInit(): void {
    this.candidateWService.getAll().subscribe(data =>{this.Candidates=data});
    document.getElementById("state1")!.style.display="block";
    
  }

book(c:CandidateW){
  this.mail.message=("welcome "+c.fullname+" we have planned an interview for you on Friday with Mr."+c.acceptedBy);
  this.mail.email=c.email;
  this.mail.name="interview";
  this.emailService.sEmail(this.mail).subscribe(data => console.log(data));
}
}
