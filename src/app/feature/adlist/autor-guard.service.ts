import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';


@Injectable({providedIn: 'root'})
export class AutorGuard implements CanActivate {
    
    constructor(
        private tokenService: TokenStorageService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {

        const loggedUser = this.tokenService.getUser();
        if(!loggedUser){
            this.router.navigate(['/adlist']);
            return false;
        }
        return true;
    }
}