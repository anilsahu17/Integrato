import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FullLayoutPagesRoutingModule } from './full-layout-pages-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ],
  imports: [
    CommonModule,
    FullLayoutPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FullLayoutPagesModule { }
