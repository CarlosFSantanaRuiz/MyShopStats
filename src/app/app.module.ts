import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ForgotLoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
