import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [MenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
