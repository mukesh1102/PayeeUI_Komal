import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EmployeeAddresComponent } from './employee-addres/employee-addres.component';
import { EmployeeBanksdetaileseComponent } from './employee-banksdetailese/employee-banksdetailese.component';
import { EfmComponent } from './efm/efm.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaymentComponent } from './payment/payment.component';
import { ModalsComponent } from './modals/modals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserProfileComponent,
    LoginComponent,
    SignUpComponent,
    EmployeeProfileComponent,
    ForgetPasswordComponent,
    EmployeeAddresComponent,
    EmployeeBanksdetaileseComponent,
    EfmComponent,
    DocumentsComponent,
    PaymentComponent,
    ModalsComponent,
    EmployeemasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
