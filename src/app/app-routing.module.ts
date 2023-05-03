import { NgModule } from '@angular/core';
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
      { path: 'updateAnnonce/:id', component: UpdateannonceComponent },


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
