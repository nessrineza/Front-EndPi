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
import { AnnonceAddFComponent } from './frontOffice/annonce-addF/annonce-addF.component';
import { ListAnnonceComponent } from './frontOffice/listannonce/listannonce.component';
import { UpdateAnnonceComponent } from './frontOffice/update-annonce/update-annonce.component';
import { SponsoringsComponent } from './frontOffice/sponsorings/sponsorings.component';

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


    ]
  },

  {
    path:'user',
    component:AllTemplateUserComponent,
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


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
