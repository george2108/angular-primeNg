import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    DividerModule,
    ButtonModule
  ]
})
export class LoginModule { }
