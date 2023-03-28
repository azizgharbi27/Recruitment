import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateWService } from '../candidate-w.service';
import { CandidatesService } from '../candidates.service';
import { CandidateW } from '../CandidateW';

@Component({
  selector: 'app-home-hr',
  templateUrl: './home-hr.component.html',
  styleUrls: ['./home-hr.component.scss']
})
export class HomeHRComponent implements OnInit {

  i:number;
  Candidates:CandidateW[];
  constructor(private candidateService:CandidateWService,private candidateWService:CandidateWService, private router:Router){

  }

  ngOnInit(): void {
    this.candidateWService.getAll().subscribe(data =>{this.Candidates=data});
    document.getElementById("state1")!.style.display="block";
    
  }
}
