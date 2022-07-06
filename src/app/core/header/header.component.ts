import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('drawer') drawer: ElementRef;

  faPhone = faPhone;
  isLoggedIn$: Observable<boolean> = this.tokenStorageService.isLoggedIn$;
  subscriptionRoute: Subscription;
  classBackground: string = '';


  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }

  // public isLoggedIn = this.tokenStorageService.isLoggedIn();

  public onClick(elementId: string): void {
    this.router.navigate(['/home'], { fragment: elementId });
  }

  logoutHandler(): void {
    this.closeMenu();
    this.tokenStorageService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.subscriptionRoute = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url.includes('home')){
          this.classBackground = '' ;
        } else {
          this.classBackground = 'header-other';
        }
      }
    });
  }

  onDrawerIconClick() {
    this.drawer.nativeElement.className = 'drawer show-drawer';
  }

  closeMenu() {
    this.drawer.nativeElement.className = 'drawer';
  }

  onClickMob(elementId: string) {
    this.closeMenu();
    this.router.navigate(['/home'], { fragment: elementId });
  }

}