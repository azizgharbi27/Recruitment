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
    HomeManComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
