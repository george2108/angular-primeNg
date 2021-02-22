import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
  }

  menu(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('content').classList.toggle('active');
  }
}
