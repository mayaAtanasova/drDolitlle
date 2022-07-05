import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  faPhone = faPhone;
  upArrow = faArrowAltCircleUp;
  adList: IAd[];

  constructor(
    private adService: AdsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adService.getLastThreeAds()
      .subscribe(lastThreeAds => {
        this.adList = lastThreeAds;
      })
  }

}
