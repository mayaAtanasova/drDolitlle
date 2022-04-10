import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('adItemAnimation', [
      transition(':enter', [
        query('.ad-item', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  upArrow = faArrowAltCircleUp;
  adList: IAd[];

  constructor(private adService: AdsService) { }

  ngOnInit(): void {
    this.adService.getLastThreeAds()
      .subscribe(lastThreeAds => {
        this.adList = lastThreeAds;
      })
  }

}
