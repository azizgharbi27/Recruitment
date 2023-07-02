import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdLogComponent } from './Admin/ad-log/ad-log.component';
import { AdHomeComponent } from './Admin/ad-home/ad-home.component';
import { AddManagerComponent } from './Admin/add-manager/add-manager.component';
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
import { CandidatesAcceptedComponent } from './candidates-accepted/candidates-accepted.component';
import { CandidatesRejectedComponent } from './candidates-rejected/candidates-rejected.component';
import { CandidatesRecruitedComponent } from './candidates-recruited/candidates-recruited.component';
import { CandidatesInterviewedComponent } from './candidates-interviewed/candidates-interviewed.component';
import { HRBookingComponent } from './hrbooking/hrbooking.component';
import { HrBookingFinalInterviewComponent } from './hr-booking-final-interview/hr-booking-final-interview.component';
import { StatisticsComponent } from './statistics/statistics.component';



const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'appC', component: AppComponent },
  { path: 'AdLogC', component: AdLogComponent },
  { path: 'AdHomeC', component: AdHomeComponent },
  { path: 'AddManC', component:AddManagerComponent },
  { path: 'DeleteManC', component:DeleteMComponent},
  { path: 'UpdateManC', component:UpdateMComponent},
  { path: 'DisplayManC', component:DisplayMComponent},
  { path: 'AddHRC', component:AddHRComponent},
  { path: 'DeleteHRC', component:DeleteHRComponent},
  { path: 'UpdateHRC', component:UpdateHRComponent},
  { path: 'DisplayHRC', component:DisplayHRComponent},
  { path: 'LoginHRC', component:LoginHRComponent},
  { path: 'LoginManC', component:LoginManComponent},
  { path: 'HomeHRC', component:HomeHRComponent},
  { path: 'HomeManC', component:HomeManComponent},
  { path: 'assets/:cv', component:CVComponent},
  { path: 'CL', component:CandidatesListComponent},
  { path: 'CR', component:CandidatesRejectedComponent},
  { path: 'CA', component:CandidatesAcceptedComponent},
  { path: 'CRec', component:CandidatesRecruitedComponent},
  { path: 'CI', component:CandidatesInterviewedComponent},
  { path: 'HRB', component:HRBookingComponent},
  { path: 'HRFB', component:HrBookingFinalInterviewComponent},
  { path: 'stat', component:StatisticsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
