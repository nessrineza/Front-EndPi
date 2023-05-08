import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AppointementComponent } from './frontOffice/appointement/appointement.component';
import { DetailAppointementComponent } from './frontOffice/detail-appointement/detail-appointement.component';
import { PayementComponent } from './frontOffice/payement/payement.component';
import { DisplayPayementComponent } from './frontOffice/display-payement/display-payement.component';
import { DetailAppoComponent } from './frontOffice/detail-appo/detail-appo.component';
import { StripePayementComponent } from './frontOffice/stripe-payement/stripe-payement.component';
import { FullCalanderComponent } from './frontOffice/full-calander/full-calander.component';
import { ReminderComponent } from './frontOffice/reminder/reminder.component';

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
        component:BodyUserComponent,
        
      },
      {
        path: 'appointments',component:AppointementComponent
      },
     
      {
        path: 'payement', component: PayementComponent

      },
      {
        path: 'Displaypayement', component: DisplayPayementComponent

      },    
       {
        path: 'DetailAppointementComponent', component: AllTemplateUserComponent ,children:[
          {path:'' , component:DetailAppointementComponent},
          {path:'detailappo/:id', component:DetailAppoComponent}
        ]

      },
      {
        path:'detailappo/:id', component:DetailAppoComponent

      },   
      {
        path:'stripe', component:StripePayementComponent

      },  
        {
        path:'CalanderofAppointement', component:FullCalanderComponent

      },   
      {
        path:'Reminder', component:ReminderComponent

      },   
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
