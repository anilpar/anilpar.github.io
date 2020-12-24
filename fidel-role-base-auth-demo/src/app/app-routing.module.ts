import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
    ]
  },

  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
