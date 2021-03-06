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
import { UserComponent } from "../app/components/user/user.component";
import { UserProfileComponent } from '../app/components/user/user-profile/user-profile.component';

// Services 
import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { ShopService } from "./services/shop.service";

// Guard
import { AuthGuard } from './guards/auth.guard';
import { ShopInfoComponent } from './components/shop-profile/shop-profile-info/shop-info/shop-info.component';
import { ContactPersonComponent } from './components/shop-profile/shop-profile-info/contact-person/contact-person.component';
import { HrsOperationComponent } from './components/shop-profile/shop-profile-info/hrs-operation/hrs-operation.component';
import { HrsOperationEditComponent } from './components/shop-profile/shop-profile-info/hrs-operation/hrs-operation-edit/hrs-operation-edit.component';
import { ContactPersonEditComponent } from './components/shop-profile/shop-profile-info/contact-person/contact-person-edit/contact-person-edit.component';
import { ShopInfoEditComponent } from './components/shop-profile/shop-profile-info/shop-info/shop-info-edit/shop-info-edit.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { LoginTopbarComponent } from './components/navbar/login-topbar/login-topbar.component';
import { ShopProfileTechniciansFormComponent } from './components/shop-profile/shop-profile-technicians/shop-profile-technicians-form/shop-profile-technicians-form.component';
import { ResetLoginPageComponent } from './components/login/reset-login-page/reset-login-page.component';
import { NotificationComponent } from './components/common/notification/notification.component';
import { ManageShopsComponent } from './components/manage-shops/manage-shops.component';
import { ManageShopsDashboardComponent } from './components/manage-shops/manage-shops-dashboard/manage-shops-dashboard.component';
import { ManageShopsListComponent } from './components/manage-shops/manage-shops-list/manage-shops-list.component';
import { ManageShopsTechListComponent } from './components/manage-shops/manage-shops-tech-list/manage-shops-tech-list.component';
import { ManageShopsAddComponent } from './components/manage-shops/manage-shops-add/manage-shops-add.component';
import { FormHrsOpComponent } from './components/common/forms/form-hrs-op/form-hrs-op.component';
import { FormContactPersonComponent } from './components/common/forms/form-contact-person/form-contact-person.component';
import { FormShopInfoComponent } from './components/common/forms/form-shop-info/form-shop-info.component';
import { DateSelectorComponent } from './components/common/date-picker/date-selector/date-selector.component';
import { MonthSelectorComponent } from './components/common/date-picker/month-selector/month-selector.component';
import { ModalHeaderComponent } from './components/common/modal/modal-header/modal-header.component';
import { ModalFooterComponent } from './components/common/modal/modal-footer/modal-footer.component';
import { ManageShopsAddTechnicianComponent } from './components/manage-shops/manage-shops-tech-list/manage-shops-add-technician/manage-shops-add-technician.component';
import { ManageShopsExistingTechnicianComponent } from './components/manage-shops/manage-shops-tech-list/manage-shops-existing-technician/manage-shops-existing-technician.component';
import { HrsOpDayComponent } from './components/common/forms/form-hrs-op/hrs-op-day/hrs-op-day.component';

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
    InvoiceDeleteComponent,
    UserComponent,
    UserProfileComponent,
    ShopInfoComponent,
    ContactPersonComponent,
    HrsOperationComponent,
    HrsOperationEditComponent,
    ContactPersonEditComponent,
    ShopInfoEditComponent,
    ModalComponent,
    LoginTopbarComponent,
    ShopProfileTechniciansFormComponent,
    ResetLoginPageComponent,
    NotificationComponent,
    ManageShopsComponent,
    ManageShopsDashboardComponent,
    ManageShopsListComponent,
    ManageShopsTechListComponent,
    ManageShopsAddComponent,
    FormHrsOpComponent,
    FormContactPersonComponent,
    FormShopInfoComponent,
    DateSelectorComponent,
    MonthSelectorComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ManageShopsAddTechnicianComponent,
    ManageShopsExistingTechnicianComponent,
    HrsOpDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ValidateService, 
    AuthService, 
    AuthGuard,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
