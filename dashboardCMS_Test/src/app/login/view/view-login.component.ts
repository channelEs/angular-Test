import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Administrator } from 'src/app/core/data_models/administrator';
import { AdministratorsService } from 'src/app/core/service/administrators.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})

export class ViewLoginComponent {
  public username: string;
  public password: string;
  public isPasswordVisible: boolean = true;
  public isFormValid: boolean;
  public errorOnLogin: boolean = false;

  constructor(
    private router: Router,
    private adminService: AdministratorsService
  ) { }
  
  public changePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public async onLogIn(): Promise<void> {
    if (!this.username || !this.password) {
      this.isFormValid = false;
      return;
    }

    if (new Date().getTime() % 2 === 0) {
      this.errorOnLogin = true;
      return;
    }

    const administrator: Administrator = {
      id: 50,
      username: this.username,
    }
    // aqui passariem l'administrador a TOKEN i el posem al local storage
    localStorage.setItem('log_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluaXN0cmF0b3JAYXdlc29tZS5jb20iLCJwb2xpY3lfZGV0YWlscyI6Int9In0.QPk_ZEjMppU47jVkSzeYgBdSCQzhhh9HVBA-wvoZqhg')
    // el guardem al service d'administrador per utilitzar-lo a l'aplicació
    this.adminService.setAdministrator(administrator);
    await this.router.navigate(['dashboard']);
  }
}
