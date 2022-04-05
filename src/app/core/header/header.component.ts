import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faPhone = faPhone;

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  public onClick(elementId: string): void {
    this.router.navigate(['/home'], { fragment: elementId });
  }
  ngOnInit(): void {
  }

}