import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdLogComponent } from './Admin/ad-log/ad-log.component';

import { HttpClientModule } from '@angular/common/http';
import { AddManagerComponent } from './Admin/add-manager/add-manager.component';
import { AdHomeComponent } from './Admin/ad-home/ad-home.component';
import { DeleteMComponent } from './Admin/delete-m/delete-m.component';
import { UpdateMComponent } from './Admin/update-m/update-m.component';
import { DisplayMComponent } from './Admin/display-m/display-m.component';
import { AddHRComponent } from './Admin/add-hr/add-hr.component';
import { DeleteHRComponent } from './Admin/delete-hr/delete-hr.component';
import { UpdateHRComponent } from './Admin/update-hr/update-hr.component';
import { DisplayHRComponent } from './Admin/display-hr/display-hr.component';
import { LoginHRComponent } from './login-hr/login-hr.component';
import { LoginManComponent } from './login-man/login-man.component';
import { HomeHRComponent } from './home-hr/home-hr.component';
import { HomeManComponent } from './home-man/home-man.component';
import { CVComponent } from './cv/cv.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesRejectedComponent } from './candidates-rejected/candidates-rejected.component';
import { CandidatesAcceptedComponent } from './candidates-accepted/candidates-accepted.component';
import { CandidatesRecruitedComponent } from './candidates-recruited/candidates-recruited.component';
import { CandidatesInterviewedComponent } from './candidates-interviewed/candidates-interviewed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
  import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCommonModule} from '@angular/material/core';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { HRBookingComponent } from './hrbooking/hrbooking.component';
import { InterviewComponent } from './interview/interview.component';
import { HrBookingFinalInterviewComponent } from './hr-booking-final-interview/hr-booking-final-interview.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgChartsModule } from 'ng2-charts';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTable,MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenu, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdLogComponent,
    AdHomeComponent,
    AddManagerComponent,
    DeleteMComponent,
    UpdateMComponent,
    DisplayMComponent,
    AddHRComponent,
    DeleteHRComponent,
    UpdateHRComponent,
    DisplayHRComponent,
    LoginHRComponent,
    LoginManComponent,
    HomeHRComponent,
    CVComponent,
    HomeManComponent,
    CandidatesListComponent,
    CandidatesRejectedComponent,
    CandidatesAcceptedComponent,
    CandidatesRecruitedComponent,
    CandidatesInterviewedComponent,
    FeedbackDialogComponent,
    HRBookingComponent,
    InterviewComponent,
    HrBookingFinalInterviewComponent,
    StatisticsComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,
    MatButtonModule,
	MatCommonModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
  NgChartsModule,
  MatPaginatorModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,

  
  

  ],
  providers: [CVComponent,{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
