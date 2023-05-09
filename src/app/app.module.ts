import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListClaimComponent } from './list-claim/list-claim.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { CommonModule } from '@angular/common';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockUpdateComponent } from './backOffice/stock-update/stock-update.component';

import {HttpClientModule} from "@angular/common/http";
import { AppointementComponent } from './frontOffice/appointement/appointement.component';
import { FormsModule } from '@angular/forms';
import { DetailAppointementComponent } from './frontOffice/detail-appointement/detail-appointement.component';
import { PayementComponent } from './frontOffice/payement/payement.component';
import { DisplayPayementComponent } from './frontOffice/display-payement/display-payement.component';
import { DetailAppoComponent } from './frontOffice/detail-appo/detail-appo.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StripePayementComponent } from './frontOffice/stripe-payement/stripe-payement.component';
import { FullCalanderComponent } from './frontOffice/full-calander/full-calander.component';

import { DialogComponentComponent } from './frontOffice/dialog-component/dialog-component.component';
import { ReminderComponent } from './frontOffice/reminder/reminder.component';
import { PayementFComponent } from './backOffice/payementF/payementF.component';
import{ appointementBComponent} from './backOffice/appointementB/appointement.component';





@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,

    ListClaimComponent,
    AddClaimComponent,
    AddStockComponent,

    StockListComponent,
      StockUpdateComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule

    AppointementComponent,
    DetailAppointementComponent,
    PayementComponent,
    DisplayPayementComponent,
    DetailAppoComponent,
    StripePayementComponent,
    FullCalanderComponent,
    DialogComponentComponent,
    ReminderComponent,
    PayementFComponent,
    appointementBComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
   
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
