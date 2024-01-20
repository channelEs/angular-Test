import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdministratorsService } from './administrators.service';
@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const accesToken = localStorage.getItem("log_token");
    const isAllowed: boolean = accesToken && accesToken.length > 0 ? true : false;
    if(!isAllowed) {
      this.router.navigate(['/login']);
    }

    const token = generateJwt(accesToken!);
    this.adminService.setAdministrator(token.payload);

    return isAllowed;
  }

  constructor(
    private router: Router,
    private adminService: AdministratorsService
  ) { }
}

const generateJwt = (token: string) => {
  const parts = token.split('.');
  const header_base64 = parts[0].replace(/-/g, '+').replace(/_/g, '/');
  const payload_base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
  const json_header = decodeFragment(header_base64);
  const json_payload = decodeFragment(payload_base64);
  return {
    header: JSON.parse(json_header),
    payload: JSON.parse(json_payload),
    signature: parts[2]
  }
}

const decodeFragment = (value: string) => {
  return decodeURIComponent(atob(value).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}