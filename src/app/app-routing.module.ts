import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'admin',
        component:BodyAdminComponent
      }
    ]
  },
  {
    path:'user',
    component:AllTemplateUserComponent,
    children:[
      {
        path:'user',
        component:BodyUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
