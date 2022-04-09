import { Component, OnInit } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  ads: IAd[] = [];
  currentAd: IAd;
  currentIndex = -1;
  category = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private adService: AdsService) { }

  ngOnInit(): void {
    this.retrievePaginatedAds();
  }

  getRequestParams(searchCategory: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchCategory) {
      params['category'] = searchCategory;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }

    return params;
  }

  retrievePaginatedAds(): void {
    const params = this.getRequestParams(this.category, this.page, this.pageSize);

    this.adService.getAllAds(params)
      .subscribe({
        next: (data) => {
          const { ads, totalItems } = data;
          this.ads = ads;
          this.count = totalItems;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
