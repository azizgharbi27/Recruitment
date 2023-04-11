import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../Candidate';

@Component({
  selector: 'app-candidates-accepted',
  templateUrl: './candidates-accepted.component.html',
  styleUrls: ['./candidates-accepted.component.scss']
})
export class CandidatesAcceptedComponent implements OnInit {
  i:number;
 Candidates:Candidate[];
  constructor(private candidateService:CandidatesService, private router:Router, private http:HttpClient,private appC: AppComponent){

  }

  ngOnInit(): void {
    this.candidateService.getAll("accepted",window.localStorage.getItem("user")!)
    .subscribe(data =>{this.Candidates=data});
    
    document.getElementById("state2")!.style.display="block";
    
  }


}
