import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SidebarModule,
    ButtonModule
  ]
})
export class DashboardModule { }
