import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocation = faLocationDot;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void {
    this.router.navigate(['/home'], { fragment: elementId });
  }
}
