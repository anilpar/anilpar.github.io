import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedViewModule } from '../shared-view/shared-view.module';


@NgModule({
  declarations: [UserDashboardComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedViewModule,
    UserRoutingModule
  ]
})
export class UserModule { }
