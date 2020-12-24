import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserItemUpdateComponent } from '../shared-view/user-item-update/user-item-update.component';
import { ViewItemsContainerComponent } from '../shared-view/view-items-container/view-items-container.component';
import { ViewProfileComponent } from '../shared-view/view-profile/view-profile.component';

// import { ViewPostListComponent } from '../shared-view/view-post-list/view-post-list.component';
// import { ViewProductListComponent } from '../shared-view/view-product-list/view-product-list.component';
// import { ViewUserListComponent } from '../shared-view/view-user-list/view-user-list.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'view/:type', component: ViewItemsContainerComponent },
  { path: 'user/create', component: UserItemUpdateComponent },
  { path: 'profile', component: ViewProfileComponent },

  // { path: 'view/products', component: ViewProductListComponent },
  // { path: 'view/posts', component: ViewPostListComponent },
  // { path: 'view/users', component: ViewUserListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
