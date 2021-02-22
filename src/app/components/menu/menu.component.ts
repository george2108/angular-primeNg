import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    public componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
    this.iniciarItems();
  }

  iniciarItems() {
    this.items = [
      {
        label: 'File',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
        ]
      },
      {
        label: 'Edit',
        items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
        ]
      }
    ];
  }

}
