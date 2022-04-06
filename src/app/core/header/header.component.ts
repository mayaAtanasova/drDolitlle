import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faPhone = faPhone;

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }

  public onClick(elementId: string): void {
    this.router.navigate(['/home'], { fragment: elementId });
  }

  logoutHandler(): void{
    console.log('logging out')
    this.tokenStorageService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}