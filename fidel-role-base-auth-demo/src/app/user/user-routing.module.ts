import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatorComponent } from '../shared-view/translator/translator.component';
import { ViewItemsContainerComponent } from '../shared-view/view-items-container/view-items-container.component';
import { ViewProfileComponent } from '../shared-view/view-profile/view-profile.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'view/:type', component: ViewItemsContainerComponent },
  { path: 'translator', component: TranslatorComponent },
  { path: 'profile', component: ViewProfileComponent },


  // { path: 'view/products', component: ViewProductListComponent },
  // { path: 'view/posts', component: ViewPostListComponent },
  // { path: 'view/users', component: ViewUserListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
