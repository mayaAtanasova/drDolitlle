import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
