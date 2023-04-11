import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GcPdfViewer from '@grapecity/gcpdfviewer';
import { Candidate } from '../Candidate';

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
  constructor(private candidateService:CandidatesService, private router:Router,private cvc:CVComponent){

  }

  ngOnInit(): void {
    
    document.getElementById("state2")!.style.display="block";
    
  }


}
