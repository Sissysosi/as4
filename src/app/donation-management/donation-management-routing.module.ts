import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationManagementPage } from './donation-management.page';

const routes: Routes = [
  {
    path: '',
    component: DonationManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationManagementPageRoutingModule {}
