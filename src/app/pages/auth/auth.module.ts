import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from '@services/auth.service';


const components = [
  LoginComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, 
    InputTextModule, 
    FloatLabelModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  exports: [
    ...components
  ]
})
export class AuthModule { }
