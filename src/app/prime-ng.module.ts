import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

const modulos = [
  ButtonModule,
  SidebarModule,
  MenuModule,
  VirtualScrollerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [modulos]
})
export class PrimeNgModule { }
