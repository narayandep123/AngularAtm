import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { ForComponent } from './user/for/for.component';
import { ThanksComponent } from './user/thanks/thanks.component';
import { MobileComponent } from './user/mobile/mobile.component';
import { viewClassName } from '@angular/compiler';
import { WithdrowComponent } from './user/withdrow/withdrow.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { LasttransactionComponent } from './user/lasttransaction/lasttransaction.component';
import { ViewbalanceComponent } from './user/viewbalance/viewbalance.component';
import { ThankyouComponent } from './user/thankyou/thankyou.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
      
    //  {path:'forgot', component:ForgotComponent}
    ]
  },
  {path:'thankyou',component:ThankyouComponent,canActivate:[AuthGuard]},
   {path:'mobile',component:MobileComponent,canActivate:[AuthGuard]},
   {path:'viewbalance',component:ViewbalanceComponent,canActivate:[AuthGuard]},
   {path:'withdrow',component:WithdrowComponent,canActivate:[AuthGuard]},
   {path:'deposit',component:DepositComponent,canActivate:[AuthGuard]},
   {path:'lasttransaction',component:LasttransactionComponent,canActivate:[AuthGuard]},
  {path:'forgot', component:ForgotComponent},
  {path:'for', component:ForComponent},
  {path:'Thanks',component:ThanksComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
