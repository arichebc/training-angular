import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { PageForgotComponent } from './pages/page-forgot/page-forgot.component';


@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetComponent,
    PageForgotComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
