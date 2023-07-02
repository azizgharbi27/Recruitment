import { Component } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Candidate } from '../Candidate';
import {MatDialog} from '@angular/material/dialog'
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';


@Component({
  selector: 'app-candidates-interviewed',
  templateUrl: './candidates-interviewed.component.html',
  styleUrls: ['./candidates-interviewed.component.scss']
})
export class CandidatesInterviewedComponent {
  i:number;
  animal:string;
  name:string;
  Candidates:Candidate[];
   constructor(private candidateService:CandidatesService, private router:Router, private http:HttpClient,
    private appC: AppComponent, public dialog: MatDialog){
      this.candidateService.getAll("booked",window.localStorage.getItem("user")!)
      .subscribe(data =>{this.Candidates=data});
   }
 
   ngOnInit(): void {
     this.candidateService.getAll("booked",window.localStorage.getItem("user")!)
     .subscribe(data =>{this.Candidates=data});
    
     
     document.getElementById("state2")!.style.display="block";
     
   }
   recruit(c:Candidate){

    this.candidateService.putC(c,"waiting for HR interview").subscribe();
    window.location.reload();
    
    
  }
  reject(c:Candidate){
  
    this.candidateService.putC(c,"rejected").subscribe();
    window.location.reload();
    
    
  }
  

  openDialog(c:Candidate): void {
    console.log(c.email);
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(c);
      this.candidateService.giveFeedback(c,result).subscribe();
    });
   
  }

}
