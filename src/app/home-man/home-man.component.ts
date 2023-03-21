import { Component, OnInit } from '@angular/core';
import { Candidate } from '../Candidate';
import { CandidatesService } from '../candidates.service';

@Component({
  selector: 'app-home-man',
  templateUrl: './home-man.component.html',
  styleUrls: ['./home-man.component.scss']
})
export class HomeManComponent implements OnInit {

  Candidates:Candidate[];
  constructor(private candidateService:CandidatesService){

  }

  ngOnInit(): void {
    this.candidateService.getAll().subscribe(data =>{this.Candidates=data});
    
  }


}
