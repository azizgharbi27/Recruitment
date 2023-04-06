import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CandidateR } from '../CandidateR';
import { CandidatesRService } from '../candidates-r.service';
import { CandidatesService } from '../candidates.service';

@Component({
  selector: 'app-candidates-rejected',
  templateUrl: './candidates-rejected.component.html',
  styleUrls: ['./candidates-rejected.component.scss']
})
export class CandidatesRejectedComponent implements OnInit {
  i:number;
  CandidatesR:CandidateR[];
  cr:CandidateR;
  constructor(private candidateRService:CandidatesRService,private candidateService:CandidatesService, private router:Router,
    private appC:AppComponent  ,private http:HttpClient){
this.cr=new CandidateR();
  }

  ngOnInit(): void {
    this.http.get<CandidateR[]>("http://localhost:8080/CandidateR/"+this.appC.UserLogged)
    .subscribe(data =>{this.CandidatesR=data});
    document.getElementById("state2")!.style.display="block";
    
  }

  restore(c:CandidateR){
    this.cr.cv=c.cv;
  this.cr.email=c.email;
  this.cr.field=c.field;
  this.cr.fullname=c.fullname;
  this.cr.id=c.id;
  this.cr.phone=c.phone;
  this.cr.skills=c.skills;
  this.cr.rejectedBy=this.appC.UserLogged;

    this.candidateService.add(c).subscribe();
    this.candidateRService.delete(this.cr.id).subscribe();
  window.location.reload();
  }
}
