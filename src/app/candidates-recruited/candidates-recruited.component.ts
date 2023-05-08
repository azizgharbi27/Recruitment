import { Component } from '@angular/core';
import { Candidate } from '../Candidate';
import { CandidatesService } from '../candidates.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-candidates-recruited',
  templateUrl: './candidates-recruited.component.html',
  styleUrls: ['./candidates-recruited.component.scss']
})
export class CandidatesRecruitedComponent {
  i:number;
  Candidates:Candidate[];
   constructor(private candidateService:CandidatesService, private router:Router, private http:HttpClient,
    private appC: AppComponent){
 
   }
 
   ngOnInit(): void {
     this.candidateService.getAll("recruited",window.localStorage.getItem("user")!)
     .subscribe(data =>{this.Candidates=data});
     
     document.getElementById("state2")!.style.display="block";
     
   }
}
