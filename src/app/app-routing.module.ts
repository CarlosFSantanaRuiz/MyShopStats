import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterationPageComponent } from './components/login/registeration-page/registeration-page.component';
import { ShopDashboardComponent } from './components/shop/shop-dashboard/shop-dashboard.component';
import { TechDashboardComponent } from './components/tech/tech-dashboard/tech-dashboard.component';
import { GoalsDashboardComponent } from './components/goals/goals-dashboard/goals-dashboard.component';
import { InvoiceDashboardComponent } from './components/invoice/invoice-dashboard/invoice-dashboard.component';
import { ShopProfileDashboardComponent } from './components/shop-profile/shop-profile-dashboard/shop-profile-dashboard.component';
import { UserComponent } from "./components/user/user.component";
import { ResetLoginPageComponent } from "./components/login/reset-login-page/reset-login-page.component";
// Guards

import { AuthGuard } from "./guards/auth.guard";
import { ForgotLoginPageComponent } from './components/login/forgot-login-page/forgot-login-page.component';
import { ManageShopsDashboardComponent } from './components/manage-shops/manage-shops-dashboard/manage-shops-dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterationPageComponent},
  {path: 'shop-dashboard', component: ShopDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/tech-dashboard', component: TechDashboardComponent, canActivate: [AuthGuard]},
  {path: 'user/:id/goals', component: GoalsDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/invoice', component: InvoiceDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/shop-profile', component: ShopProfileDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/manage-shops', component: ManageShopsDashboardComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user-profile', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'user/reset/:id', component: ResetLoginPageComponent},
  {path: 'user/forgot-login', component: ForgotLoginPageComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
