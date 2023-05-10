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
import { FormsModule } from '@angular/forms';
import { PublicationComponent } from './publication/publication.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import {  RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentBackComponent } from './backOffice/comment-back/comment-back.component';
import { PublicationBackComponent } from './backOffice/publication-back/publication-back.component';
import { ShareButtons, ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButton, ShareButtonModule } from 'ngx-sharebuttons/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import * as Grammarly from "@grammarly/editor-sdk";
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';
import { init } from '@grammarly/editor-sdk';

import { NgxEditorModule } from 'ngx-editor';



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
    HeaderUserComponent,PublicationComponent, CommentComponent, CommentBackComponent, PublicationBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,RichTextEditorModule,  BrowserAnimationsModule
,ShareIconsModule,ShareButtonsModule,FontAwesomeModule, DocumentEditorModule,NgxEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
