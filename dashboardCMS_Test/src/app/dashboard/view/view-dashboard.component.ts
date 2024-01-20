import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Administrator } from 'src/app/core/data_models/administrator';
import { AdministratorsService } from 'src/app/core/service/administrators.service';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {
  administrator: Administrator;

  constructor(
    private router: Router,
    private adminService: AdministratorsService,
  ) {
  }

  ngOnInit(): void {
    this.administrator = this.adminService.getAdministrator();
  }

  returnlog() {
    localStorage.removeItem('log_token')
    this.router.navigate(['/login'])
  }
}
