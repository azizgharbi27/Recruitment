import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GcPdfViewer from '@grapecity/gcpdfviewer';
import { Candidate } from '../Candidate';
import { CandidateWService } from '../candidate-w.service';
import { CandidatesService } from '../candidates.service';
import { CVComponent } from '../cv/cv.component';

@Component({
  selector: 'app-home-man',
  templateUrl: './home-man.component.html',
  styleUrls: ['./home-man.component.scss']
})
export class HomeManComponent implements OnInit {

  i:number;
  Candidates:Candidate[];
  constructor(private candidateService:CandidatesService,private candidateWService:CandidateWService, private router:Router,private cvc:CVComponent){

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
  console.log(c.id);
  this.candidateService.delete(c.id).subscribe();
  console.log(c.id);
  window.location.reload();
  
  
}
}
