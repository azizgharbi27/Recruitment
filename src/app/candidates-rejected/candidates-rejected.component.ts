import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../Candidate';

@Component({
  selector: 'app-candidates-rejected',
  templateUrl: './candidates-rejected.component.html',
  styleUrls: ['./candidates-rejected.component.scss']
})
export class CandidatesRejectedComponent implements OnInit {
  i:number;
  Candidates:Candidate[];
  
  constructor(private candidateService:CandidatesService, private router:Router,
    private appC:AppComponent  ,private http:HttpClient){

  }

  ngOnInit(): void {
    this.candidateService.get("rejected").subscribe(data =>{this.Candidates=data});
    document.getElementById("state2")!.style.display="block";
    
  }

  restore(c:Candidate){
    
    this.candidateService.restoreC(c).subscribe();
      window.location.reload();
  }
}
