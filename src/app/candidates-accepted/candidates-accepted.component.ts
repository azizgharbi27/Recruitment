import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateWService } from '../candidate-w.service';
import { CandidateW } from '../CandidateW';

@Component({
  selector: 'app-candidates-accepted',
  templateUrl: './candidates-accepted.component.html',
  styleUrls: ['./candidates-accepted.component.scss']
})
export class CandidatesAcceptedComponent implements OnInit {
  i:number;
  CandidatesW:CandidateW[];
  constructor(private candidateWService:CandidateWService, private router:Router){

  }

  ngOnInit(): void {
    this.candidateWService.getAll().subscribe(data =>{this.CandidatesW=data});
    document.getElementById("state2")!.style.display="block";
    
  }


}
