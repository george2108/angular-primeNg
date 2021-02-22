import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PrimeNgModule } from './prime-ng.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    PrimeNgModule
  ],
  exports: [PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
