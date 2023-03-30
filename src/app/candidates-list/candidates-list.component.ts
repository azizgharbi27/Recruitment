import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../Candidate';
import { CandidateWService } from '../candidate-w.service';
import { CandidatesRService } from '../candidates-r.service';
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
  constructor(private candidateService:CandidatesService,private candidateWService:CandidateWService,
    private candidateRService:CandidatesRService, private router:Router,private cvc:CVComponent){

  }

  ngOnInit(): void {
    this.candidateService.getAll().subscribe(data =>{this.Candidates=data});
    document.getElementById("state2")!.style.display="block";
    
  }

getCV(cv:string){
  this.router.navigate(['/assets',cv]);
  
}
recruit(c:Candidate){
  
  this.candidateWService.add(c).subscribe();
  this.candidateService.delete(c.id).subscribe();
  window.location.reload();
  
  
}
reject(c:Candidate){
  
  this.candidateRService.add(c).subscribe();
  this.candidateService.delete(c.id).subscribe();
  window.location.reload();
  
  
}

}
