import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../../../components/components.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
  }

}
