import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainboardComponent } from './mainboard/mainboard.component';
const routes: Routes = [
  { path:'registeration',component:RegisterationComponent},
  { path:'',component:LoginComponent },
  { path:'forget_password',component:ForgetPasswordComponent },
  { path:'dashboard',component:DashboardComponent},
  { path:'mainboard',component:MainboardComponent},
  { path: "**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisterationComponent,LoginComponent,ForgetPasswordComponent,PageNotFoundComponent,DashboardComponent,MainboardComponent]
