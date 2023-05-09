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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
