import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, mergeMap } from 'rxjs';
import { IAd } from 'src/app/core/interfaces/ad';
import { IUser } from 'src/app/core/interfaces/user';
import { AdsService } from 'src/app/core/services/ads.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-pad-edit',
  templateUrl: './ad-edit.component.html',
  styleUrls: ['./ad-edit.component.css']
})
export class AdEditComponent implements OnInit {

  isSuccessful = false;
  isSubmitted = false;
  errorMessage = '';
  roles: any;
  viewMode = 'edit';

  currentAd: IAd;

  currentUser: IUser;

  constructor(
    private adService: AdsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params.pipe(
        mergeMap(params => {
          return this.adService.getAdById(params['adId'])
        })
      ),
      this.tokenService.currentUser$
    ])
    .subscribe(([ad, user]) => {
      if(user){
        this.currentUser = user;
        this.currentAd = ad;
      }
    })
  }

  onSubmit(formData:FormData): void {
    
    this.adService.updateAd(this.currentAd._id, formData)
    .subscribe({
      next: (res) => {
        this.isSubmitted = true;
        if(res.status === 400){
          this.isSuccessful = false;
          this.errorMessage = res.error.message;
        setTimeout(() => this.hideAlert(), 2000);
        }
        this.isSuccessful = true;
        this.router.navigate(['/adlist']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSubmitted = true;
        this.isSuccessful = false;
        setTimeout(() => this.hideAlert(), 3000);
      }
    });

  }

  hideAlert() {
    this.isSubmitted = false;
    this.isSuccessful = false;
    this.errorMessage = ''
  }

}
