import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { FormSigninComponent } from './components/form-signin/form-signin.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageForgotComponent } from './pages/page-forgot/page-forgot.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetComponent,
    PageForgotComponent,
    FormSigninComponent,
    FormSignUpComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    TemplatesModule,
  ],
})
export class LoginModule {}
