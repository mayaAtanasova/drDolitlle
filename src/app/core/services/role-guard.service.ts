import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {
  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {

    const loggedUser = this.tokenService.getUser();
    let isAdmin = false;
    if(loggedUser) {
      isAdmin = loggedUser.roles.includes('ROLE_ADMIN');
    }
    if(!isAdmin){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
