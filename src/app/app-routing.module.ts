import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'signup',component:SignupComponent},
  { path:'payment',component:PaymentDetailsComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
