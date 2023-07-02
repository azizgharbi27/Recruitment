import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';

import { CandidatesService } from '../candidates.service';

import { EmailService } from '../email.service';
import { Email } from '../Email';
import { Candidate } from '../Candidate';
import { ManagersService } from '../managers.service';
import { Manager } from '../Manager';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { InterviewComponent } from '../interview/interview.component';
import {MatDialog} from '@angular/material/dialog'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hr-booking-final-interview',
  templateUrl: './hr-booking-final-interview.component.html',
  styleUrls: ['./hr-booking-final-interview.component.scss']
})
export class HrBookingFinalInterviewComponent {
  mail :Email = new Email();
  managers:Manager[];
  i:number;
  Candidates:Candidate[]=[];
  date:Date;
  constructor(private candidateService:CandidatesService,private managersService:ManagersService , private appC:AppComponent,
    private router:Router, private emailService:EmailService, public dialog: MatDialog){
      this.managers=[];
  }

  ngOnInit(): void {
    this.candidateService.get("waiting for HR interview").subscribe(data =>{this.Candidates=data});
    
    this.managersService.getAll().subscribe(data =>{this.managers=data});
    document.getElementById("state1")!.style.display="block";
    
  }
  

book(c:Candidate){

  this.openDialog(c);
  
}
openDialog(c:Candidate): void {
  
  const dialogRef = this.dialog.open(InterviewComponent, {
    data: {Date: this.date},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
    
    this.date=result;
    console.log(this.date);
    for (let i=0;i<this.managers.length;i++){
    
      if (this.managers[i].name == c.manager){
       console.log(this.managers[i]);
        this.mail.emailm=this.managers[i].email;
      }
  }
    this.mail.message=("welcome "+c.fullname+" we have planned an interview for you with Mr."+this.appC.UserLogged+" on "+this.date);
    this.mail.emailc=c.email;
    this.mail.name="interview";
    console.log(this.mail);
    this.emailService.sEmail(this.mail,this.date).subscribe(data => console.log(data));
    this.candidateService.state(c,"recruited").subscribe();
    window.location.reload();
  });
 
}
}
