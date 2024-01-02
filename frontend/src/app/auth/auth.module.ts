import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRoutingModule } from './auth.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
