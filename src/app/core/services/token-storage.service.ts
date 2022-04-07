import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  private loggedUser = this.getUser();
  private _currentUser = new BehaviorSubject<IUser | null>(this.loggedUser);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(public jwtHelper: JwtHelperService) { }

  logout(): void {
    console.log('logout called')
    window.localStorage.clear();
    this._currentUser.next(null);
    console.log(this.isLoggedIn$)
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: IUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.handleSaveUser(user);
  }

  public getUser(): IUser | null {
    const user = window.localStorage.getItem(USER_KEY);
    const token = this.getToken();

    if (token) {
      const isActive = !this.jwtHelper.isTokenExpired(token);
      if (isActive && user){
        return JSON.parse(user);
      }
    }
    return null;
  }

  handleSaveUser(user: IUser){
    this._currentUser.next(user)
  }

}
