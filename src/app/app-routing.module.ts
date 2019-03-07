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

// Guards

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterationPageComponent},
  {path: 'user/:id/shop-dashboard', component: ShopDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/tech-dashboard', component: TechDashboardComponent, canActivate: [AuthGuard]},
  {path: 'user/:id/goals', component: GoalsDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/invoice', component: InvoiceDashboardComponent, canActivate:[AuthGuard]},
  {path: 'user/:id/shop-profile', component: ShopProfileDashboardComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'user/:id/shop-dashboard', pathMatch: 'full', canActivate:[AuthGuard]},
  {path: 'user-profile', component: UserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
