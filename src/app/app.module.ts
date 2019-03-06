import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";


// UI Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopDashboardComponent } from './components/shop/shop-dashboard/shop-dashboard.component';
import { ShopAddComponent } from './components/shop/shop-add/shop-add.component';
import { ShopEditComponent } from './components/shop/shop-edit/shop-edit.component';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { TechComponent } from './components/tech/tech.component';
import { TechDashboardComponent } from './components/tech/tech-dashboard/tech-dashboard.component';
import { TechAddComponent } from './components/tech/tech-add/tech-add.component';
import { TechEditComponent } from './components/tech/tech-edit/tech-edit.component';
import { TechListComponent } from './components/tech/tech-list/tech-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceAddComponent } from './components/invoice/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './components/invoice/invoice-edit/invoice-edit.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { InvoiceDashboardComponent } from './components/invoice/invoice-dashboard/invoice-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationPageComponent } from './components/login/registeration-page/registeration-page.component';
import { ForgotLoginPageComponent } from './components/login/forgot-login-page/forgot-login-page.component';
<<<<<<< HEAD
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
=======
import { SidebarComponent } from './components/navbar/sidebar/sidebar.component';
import { TopbarComponent } from './components/navbar/topbar/topbar.component';
import { GaugeComponent } from './components/common/gauge/gauge.component';
import { DatePickerComponent } from './components/common/date-picker/date-picker.component';
import { GoalsComponent } from './components/goals/goals.component';
import { GoalsDashboardComponent } from './components/goals/goals-dashboard/goals-dashboard.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { ShopProfileComponent } from './components/shop-profile/shop-profile.component';
import { ShopProfileInfoComponent } from './components/shop-profile/shop-profile-info/shop-profile-info.component';
import { ShopProfileTechniciansComponent } from './components/shop-profile/shop-profile-technicians/shop-profile-technicians.component';
import { ShopProfileDashboardComponent } from './components/shop-profile/shop-profile-dashboard/shop-profile-dashboard.component';
import { InvoiceDeleteComponent } from './components/invoice/invoice-delete/invoice-delete.component';
>>>>>>> 6f29429a24c7a9b5d2e34d2c153b08a3b2a2aaaf



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ShopDashboardComponent,
    ShopAddComponent,
    ShopEditComponent,
    ShopListComponent,
    TechComponent,
    TechDashboardComponent,
    TechAddComponent,
    TechEditComponent,
    TechListComponent,
    InvoiceComponent,
    InvoiceAddComponent,
    InvoiceEditComponent,
    InvoiceListComponent,
    InvoiceDashboardComponent,
    LoginComponent,
    RegisterationPageComponent,
    ForgotLoginPageComponent,
<<<<<<< HEAD
    UserComponent,
    UserProfileComponent,
    UserCreateComponent,
=======
    SidebarComponent,
    TopbarComponent,
    GaugeComponent,
    DatePickerComponent,
    GoalsComponent,
    GoalsDashboardComponent,
    GoalsListComponent,
    ShopProfileComponent,
    ShopProfileInfoComponent,
    ShopProfileTechniciansComponent,
    ShopProfileDashboardComponent,
    InvoiceDeleteComponent
>>>>>>> 6f29429a24c7a9b5d2e34d2c153b08a3b2a2aaaf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
