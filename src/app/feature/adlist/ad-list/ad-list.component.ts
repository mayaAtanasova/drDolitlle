import { Component, OnInit } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';
import { AdsService } from 'src/app/core/services/ads.service';
import { trigger, transition, state, style, animate, query, stagger } from '@angular/animations';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';


@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css'],
  animations: [
    trigger('adItemAnimation', [
      transition(':enter', [
        query('.ad-item', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(300, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class AdListComponent implements OnInit {

  isLoggedIn$: Observable<boolean> = this.tokenStorageService.isLoggedIn$;

  adList: IAd[];
  category = '';

  page = 1;
  count = 0;
  totPages = [0];
  pageSize = 6;

  constructor(
    private adService: AdsService,
    private router: Router,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.retrievePaginatedAds();
  }

  gotoNew() {
    this.router.navigate(['/adlist/new']);
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
