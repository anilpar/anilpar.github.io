import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedViewModule } from '../shared-view/shared-view.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [AdminLayoutComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedViewModule,
    ChartsModule
  ]
})
export class AdminModule { }
