import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { Candidate } from '../Candidate';

import { CandidatesService } from '../candidates.service';

import { CVComponent } from '../cv/cv.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource,MatTable} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  dataSource: MatTableDataSource<Candidate>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  i:number;
  Candidates0:Candidate[]=[];
  Candidates:Candidate[]=[];
  skill:string="";
  field:string="";
  constructor(private candidateService:CandidatesService, private router:Router,private cvc:CVComponent,private appC:AppComponent){
    this.candidateService.get("pending").subscribe(data =>{this.Candidates=data});
    this.dataSource = new MatTableDataSource(this.Candidates);
  }

  ngOnInit(): void {
    console.log("a"+this.appC.UserLogged);
   
    this.candidateService.get("pending").subscribe(data =>{this.Candidates0=data});
    this.dataSource.paginator = this.paginator;

console.log(this.Candidates0);

    document.getElementById("state2")!.style.display="block";
    
  
    
  }

getCV(cv:string){
  this.router.navigate(['/assets',cv]);
  
}
recruit(c:Candidate){

  this.candidateService.putC(c,"waiting for Manager interview").subscribe();
  window.location.reload();
  
  
}
reject(c:Candidate){

  this.candidateService.putC(c,"rejected").subscribe();
  window.location.reload();
  
  
}
search(){
  let a=""
 console.log(this.field)
{
    this.Candidates = this.Candidates0.filter(ce => ((ce.field == this.field)||this.field== "All"||this.field== "") 
    &&  ce.skills.toUpperCase().includes(this.skill.toUpperCase()))
  }
  console.log(this.Candidates0);
}

}
