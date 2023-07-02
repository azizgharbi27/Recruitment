import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { LabelItem } from 'chart.js/dist/types/index';
import { NgChartsModule } from 'ng2-charts';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../Candidate';
import { ManagersService } from '../managers.service';
import { Manager } from '../Manager';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit{
  candidates:Candidate[]=[];
managers:Manager[]=[];
fil:Candidate[]=[];
IT:any
Business:any
doughnutChartLabels:any;
doughnutChartData:any;
doughnutChartType:any;
pieChartLabels :any[]=[];
pieChartData :any[]=[];
pieChartType :any
barChartLabels :any[]=[];
barChartData :any[]=[];
barChartType :any
pieChartOptions:any
doughnutChartOptions:any
barChartOptions:any

  constructor(private candidateService:CandidatesService, private managersServ:ManagersService)
  {
    this.candidateService.get("waiting for HR decision").subscribe(data =>{this.candidates=data;});
    this.candidateService.getall().subscribe(data =>{this.candidates=data});
    
    console.log(this.candidates);
  }

ngOnInit(): void {
 this.doughnut();
this.bar();

this.pie();
}



doughnut(){
  this.candidateService.get("recruited").subscribe(data =>{this.candidates=data;
    this.IT=this.candidates.filter(ce => ((ce.field=="IT" ))).length;
    this.Business = this.candidates.filter(ce => (ce.field=="Business" )).length;
    
    this.doughnutChartLabels = ['IT', 'Business'];
    this.doughnutChartData = [{data: [this.IT, this.Business]}];
    this.doughnutChartType  = 'doughnut';
    this.doughnutChartOptions = {
      responsive: true,
    };
    });
}


bar(){
  this.candidateService.get("recruited").subscribe(data =>{this.candidates=data;});
this.managersServ.getAll().subscribe(data =>{this.managers=data;
  
  
  for(let i=0;i<this.managers.length;i++){
    
    this.barChartLabels.push(this.managers[i].name);
    
    this.fil = this.candidates.filter(ce => (ce.manager == this.managers[i].name ));
    this.barChartData.push(this.fil.length);
  } 
  console.log(this.barChartLabels);

  this.barChartLabels = this.barChartLabels;
  this.barChartData = [{data: this.barChartData,label :"Candidates",color:'orange'}];


  this.barChartOptions = {
    responsive: true,
  };
  this.barChartType  = 'bar';
  
 });
}


pie(){
  this.pieChartLabels=["pending","waiting for Manager interview","waiting for HR interview","recruited","rejected"];
  
  this.candidateService.getall().subscribe(data =>{this.candidates=data;
  for(let i=0;i<this.pieChartLabels.length;i++){
    this.fil = this.candidates.filter(ce => (ce.status == this.pieChartLabels[i] ));
      this.pieChartData.push(this.fil.length);
    
    
    }
  this.pieChartLabels = this.pieChartLabels;
  this.pieChartData = [{data: this.pieChartData}];
 this.pieChartType = 'pie';
 this.pieChartOptions = {
  responsive: true,
};
});
}
}
