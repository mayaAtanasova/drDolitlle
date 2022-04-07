import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { TokenStorageService } from '../core/services/token-storage.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
    constructor(
        private tokenService: TokenStorageService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {

        const loggedUser = this.tokenService.getUser();
        if(loggedUser){
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}