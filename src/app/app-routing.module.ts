import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { PublicationComponent } from './publication/publication.component';
import { CommentComponent } from './comment/comment.component';
import { CommentBackComponent } from './backOffice/comment-back/comment-back.component';
import { PublicationBackComponent } from './backOffice/publication-back/publication-back.component';

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
  },
  { path: 'pub',
  component:PublicationComponent,
  }, { path: 'comadmin',
  component:CommentBackComponent,
  },{ path: 'pubadmin',
  component:PublicationBackComponent,
  },
  { path: 'com/:idPub',
  component:CommentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
