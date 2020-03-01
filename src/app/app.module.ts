import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForgotComponent } from './user/forgot/forgot.component';
import { ForComponent } from './user/for/for.component';
import { ThanksComponent } from './user/thanks/thanks.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { ViewbalanceComponent } from './user/viewbalance/viewbalance.component';
import { LasttransactionComponent } from './user/lasttransaction/lasttransaction.component';
import { MobileComponent } from './user/mobile/mobile.component';
import { WithdrowComponent } from './user/withdrow/withdrow.component';
import { ThankyouComponent } from './user/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ForgotComponent,
    ForComponent,
    ThanksComponent,
    DepositComponent,
    ViewbalanceComponent,
    LasttransactionComponent,
    MobileComponent,
    WithdrowComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
