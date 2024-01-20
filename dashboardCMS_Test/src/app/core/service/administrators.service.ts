import { Injectable } from '@angular/core';
import { Administrator } from '../data_models/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsService {
  administrator: Administrator;
  constructor() {  }

  getAdministrator(): Administrator {
    return this.administrator;
  }
  setAdministrator(Admin: Administrator) {
    this.administrator = Admin;
  }
}
