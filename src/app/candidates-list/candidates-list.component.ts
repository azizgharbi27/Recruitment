import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { Candidate } from '../Candidate';
import { CandidateWService } from '../candidate-w.service';
import { CandidateR } from '../CandidateR';
import { CandidatesRService } from '../candidates-r.service';
import { CandidatesService } from '../candidates.service';
import { CandidateW } from '../CandidateW';
import { CVComponent } from '../cv/cv.component';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  i:number;
  Candidates:Candidate[];
  cr:CandidateR;
  cw:CandidateW;
  constructor(private candidateService:CandidatesService,private candidateWService:CandidateWService,
    private candidateRService:CandidatesRService, private router:Router,private cvc:CVComponent,private appC:AppComponent){
     this.cw=new CandidateW();
     this.cr= new CandidateR();
  }

  ngOnInit(): void {
    console.log("a"+this.appC.UserLogged);
    this.candidateService.getAll().subscribe(data =>{this.Candidates=data});
    document.getElementById("state2")!.style.display="block";
    
  }

getCV(cv:string){
  this.router.navigate(['/assets',cv]);
  
}
recruit(c:Candidate){

  this.cw.cv=c.cv;
  this.cw.email=c.email;
  this.cw.field=c.field;
  this.cw.fullname=c.fullname;
  this.cw.id=c.id;
  this.cw.phone=c.phone;
  this.cw.skills=c.skills;
  this.cw.acceptedBy=this.appC.UserLogged;
 
  
  this.candidateWService.add(this.cw).subscribe();
  this.candidateService.delete(c.id).subscribe();
  window.location.reload();
  
  
}
reject(c:Candidate){
  this.cr.cv=c.cv;
  this.cr.email=c.email;
  this.cr.field=c.field;
  this.cr.fullname=c.fullname;
  this.cr.id=c.id;
  this.cr.phone=c.phone;
  this.cr.skills=c.skills;
  this.cr.rejectedBy=this.appC.UserLogged;
 
  this.candidateRService.add(this.cr).subscribe();
  this.candidateService.delete(c.id).subscribe();
  window.location.reload();
  
  
}

}
