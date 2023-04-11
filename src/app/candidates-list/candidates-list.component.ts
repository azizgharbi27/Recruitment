import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { Candidate } from '../Candidate';

import { CandidatesService } from '../candidates.service';

import { CVComponent } from '../cv/cv.component';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  i:number;
  Candidates:Candidate[];
  
  constructor(private candidateService:CandidatesService, private router:Router,private cvc:CVComponent,private appC:AppComponent){
     
  }

  ngOnInit(): void {
    console.log("a"+this.appC.UserLogged);
    this.candidateService.getAll("pending","all").subscribe(data =>{this.Candidates=data});
    document.getElementById("state2")!.style.display="block";
    
  }

getCV(cv:string){
  this.router.navigate(['/assets',cv]);
  
}
recruit(c:Candidate){

  this.candidateService.putC(c,"accepted").subscribe();
  window.location.reload();
  
  
}
reject(c:Candidate){

  this.candidateService.putC(c,"rejected").subscribe();
  window.location.reload();
  
  
}

}
