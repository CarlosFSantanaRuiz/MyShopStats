import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterationPageComponent } from './components/login/registeration-page/registeration-page.component';
import { ShopDashboardComponent } from './components/shop/shop-dashboard/shop-dashboard.component';
import { TechDashboardComponent } from './components/tech/tech-dashboard/tech-dashboard.component';
import { InvoiceDashboardComponent } from './components/invoice/invoice-dashboard/invoice-dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterationPageComponent},
  {path: 'user/profile', component: RegisterationPageComponent},
  {path: 'user/shop-dashboard', component: ShopDashboardComponent},
  {path: 'user/tech-dashboard', component: TechDashboardComponent},
  {path: 'user/invoice', component: InvoiceDashboardComponent},
  {path: '', redirectTo: 'user/:id/shop-dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
