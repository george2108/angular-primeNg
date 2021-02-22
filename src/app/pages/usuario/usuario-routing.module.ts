import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    pathMatch: 'full',
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
