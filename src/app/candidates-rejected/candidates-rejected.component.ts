import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private candidateRService:CandidatesRService,private candidateService:CandidatesService, private router:Router){

  }

  ngOnInit(): void {
    this.candidateRService.getAll().subscribe(data =>{this.CandidatesR=data});
    document.getElementById("state2")!.style.display="block";
    
  }

  restore(c:CandidateR){
    this.candidateService.add(c).subscribe();
    this.candidateRService.delete(c.id).subscribe();
  window.location.reload();
  }
}
