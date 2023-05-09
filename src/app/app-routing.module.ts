import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AppointementComponent } from './frontOffice/appointement/appointement.component';
import { DetailAppointementComponent } from './frontOffice/detail-appointement/detail-appointement.component';
import {AuthGuardGuard} from "./auth-guard.guard";
import {UserAdminComponent} from "./backOffice/user-admin/user-admin.component";
import {UserProfileComponent} from "./backOffice/user-profile/user-profile.component";
import {UserProfileSettingsComponent} from "./frontOffice/user-profile-settings/user-profile-settings.component";

const routes: Routes = [
  { path:'', redirectTo:'auth/signin', pathMatch:'full' },
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {path:'home',component:BodyAdminComponent,canActivate:[AuthGuardGuard]},
      {path:"userAdmin",component:UserAdminComponent,canActivate:[AuthGuardGuard]},
      {path:"userProfile",component:UserProfileComponent,canActivate:[AuthGuardGuard]}
    ],canActivate:[AuthGuardGuard]
  },
  
  {
    path:'user',
    component:AllTemplateUserComponent,
    children:[
      {path:'home',component:BodyUserComponent,canActivate:[AuthGuardGuard]},
      {path: 'appointments',component:AppointementComponent,canActivate:[AuthGuardGuard]},
      {path:"userProfile",component:UserProfileSettingsComponent,canActivate:[AuthGuardGuard]},
      {path: 'DetailAppointementComponent', component: DetailAppointementComponent,canActivate:[AuthGuardGuard]}
    ],canActivate:[AuthGuardGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
