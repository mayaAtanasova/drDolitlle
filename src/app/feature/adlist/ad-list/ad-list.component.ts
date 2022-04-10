import { Component, OnInit } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css'],
})
export class AdListComponent implements OnInit {

  adList: IAd[] = [];
  category = '';

  page = 1;
  count = 0;
  totPages = [0];
  pageSize = 6;
  // pageSizes = [3, 6, 9];

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
          const { Ads, totalItems, totalPages } = data;
          this.adList = Ads;
          this.count = totalItems;
          this.totPages = Array.from(Array(totalPages).keys());
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  gotoPage($event: any): void {
    this.page = Number($event.target.innerText);
    this.retrievePaginatedAds();
  }

  gotoPrev(){
    this.page -= 1;
    this.retrievePaginatedAds();
  }

  gotoNext(){
    this.page += 1;
    this.retrievePaginatedAds();
  }


  removeAllAds(): void {
    this.adService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.retrievePaginatedAds();
        },
        error: (e) => console.error(e)
      });
  }

  searchCategory(): void {
    console.log(this.category);
    this.page = 1;
    this.retrievePaginatedAds();
  }

}
