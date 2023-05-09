import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { ListClaimComponent } from './list-claim/list-claim.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockUpdateComponent } from './backOffice/stock-update/stock-update.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
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
    ]
  },
  {
    path:'user', component:AllTemplateUserComponent,
    children:[
      {
        path:'user', component:BodyUserComponent
      },
      {
        path: 'frontclaim', component:AddClaimComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
