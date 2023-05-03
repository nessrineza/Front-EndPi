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
import { HttpClientModule,  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementComponent } from './backOffice/announcement/announcement.component';
import { ListAnnoncesComponent } from './backOffice/list-annonces/list-annonces.component';
import { SponsoringComponent } from './backOffice/sponsoring/sponsoring.component';
import { ListSponsoringsComponent } from './backOffice/list-sponsorings/list-sponsorings.component';
import { UpdateannonceComponent } from './backOffice/updateannonce/updateannonce.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AddAnnonceComponent } from './backOffice/add-annonce/add-annonce.component';
import { AnnonceAddComponent } from './backOffice/annonce-add/annonce-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    ListAnnoncesComponent,
    SponsoringComponent,
    ListSponsoringsComponent,
    UpdateannonceComponent,
    AddAnnonceComponent,
    AnnonceAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    FormsModule ,
    NgxPaginationModule,
    FilterPipeModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
