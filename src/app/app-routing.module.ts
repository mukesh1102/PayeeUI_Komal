import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeAddresComponent } from './employee-addres/employee-addres.component';
import { EmployeeBanksdetaileseComponent } from './employee-banksdetailese/employee-banksdetailese.component';
import { EfmComponent } from './efm/efm.component';
import { PaymentComponent } from './payment/payment.component';
import { DocumentsComponent } from './documents/documents.component';
import { ModalsComponent } from './modals/modals.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:DashboardComponent},
  {path:'employee_profile',component:EmployeeProfileComponent},
  {path:'employee_address',component:EmployeeAddresComponent},
  {path:'employee_master',component:EmployeemasterComponent},

  {path:'employee_banksdetailese',component:EmployeeBanksdetaileseComponent},
  {path:'efm',component:EfmComponent},
  {path:'payment',component:PaymentComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'modals',component:ModalsComponent},
  {path:'signup',component:SignUpComponent},
  { path: 'user_profile', component:UserProfileComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'header',component:HeaderComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'footer',component:FooterComponent},
  ]
},
{ path: '', redirectTo: '/login' , pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
