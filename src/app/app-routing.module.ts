import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AnnouncementComponent } from './backOffice/announcement/announcement.component';
import { ListAnnoncesComponent } from './backOffice/list-annonces/list-annonces.component';
import { UpdateannonceComponent } from './backOffice/updateannonce/updateannonce.component';
import { AddAnnonceComponent } from './backOffice/add-annonce/add-annonce.component';
import { ListSponsoringsComponent } from './backOffice/list-sponsorings/list-sponsorings.component';
import { SponsoringComponent } from './backOffice/sponsoring/sponsoring.component';
import { AnnonceAddComponent } from './backOffice/annonce-add/annonce-add.component';
import { AnnonceAddFComponent } from './frontOffice/annonce-addF/annonce-addF.component';
import { ListAnnonceComponent } from './frontOffice/listannonce/listannonce.component';
import { UpdateAnnonceComponent } from './frontOffice/update-annonce/update-annonce.component';
import { SponsoringsComponent } from './frontOffice/sponsorings/sponsorings.component';

import { ListClaimComponent } from './list-claim/list-claim.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockUpdateComponent } from './backOffice/stock-update/stock-update.component';


import { AppointementComponent } from './frontOffice/appointement/appointement.component';
import { DetailAppointementComponent } from './frontOffice/detail-appointement/detail-appointement.component';
import { PayementComponent } from './frontOffice/payement/payement.component';
import { DisplayPayementComponent } from './frontOffice/display-payement/display-payement.component';
import { DetailAppoComponent } from './frontOffice/detail-appo/detail-appo.component';
import { StripePayementComponent } from './frontOffice/stripe-payement/stripe-payement.component';
import { FullCalanderComponent } from './frontOffice/full-calander/full-calander.component';
import { ReminderComponent } from './frontOffice/reminder/reminder.component';
import { PayementFComponent} from './backOffice/payementF/payementF.component';
import { appointementBComponent } from './backOffice/appointementB/appointement.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {

        path:'',
        component:BodyAdminComponent
      },
      {
        path:'annonce',
        component:AnnouncementComponent
      },
      {
        path:'add/annonce',
        component:AnnonceAddComponent
      },
      {
        path:'listannonce',
        component:ListAnnoncesComponent
      },
      {
        path:'updateannonce/:id',
        component:UpdateannonceComponent
      },
      {
        path:'sponsoringlist',
        component:ListSponsoringsComponent
      },

      {
        path:'add/sponsoring',
        component:SponsoringComponent
      },
      { path: 'updateAnnonce/:id',
       component: UpdateAnnonceComponent },



        path:'admin', component:BodyAdminComponent
      },
      {
        path: 'Claims', component:ListClaimComponent
      },
      {
        path: 'Stocks', component:StockListComponent
      },
      {
        path: 'addstock', component:AddStockComponent
      },
      {
        path: 'updatestock', component:StockUpdateComponent
      }

        path:'admin',
        component:BodyAdminComponent
      },
      {
        path: 'payement', component: PayementFComponent

      }, {
        path: 'appointement', component: appointementBComponent

      },   


    ]
  },

  {
    path:'user', component:AllTemplateUserComponent,
    children:[
      {

        path:'user',
        component:BodyUserComponent
      },
      {
        path:'addF/annonce',
        component:AnnonceAddFComponent
      },
      {
        path:'listannonce',
        component:ListAnnonceComponent
      },
      {
        path:'updateAnnonce/:id',
        component:UpdateAnnonceComponent
      },
      {
        path:'sponsoringlist',
        component:ListSponsoringsComponent
      },
      {
        path:'add/sponsorings',
        component:SponsoringsComponent
      },



        path:'user', component:BodyUserComponent
      },
      {
        path: 'frontclaim', component:AddClaimComponent
      }

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
