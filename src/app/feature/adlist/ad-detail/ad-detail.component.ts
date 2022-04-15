import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, mergeMap, Observable, switchMap } from 'rxjs';
import { IAd } from 'src/app/core/interfaces/ad';
import { IUser } from 'src/app/core/interfaces/user';
import { AdsService } from 'src/app/core/services/ads.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {

  currentAd:IAd;

  showDialog = false;
  confirmation = false;

  currentUser: IUser;
  isOwner = false;
  isAdmin = false;
  isModerator = false;
  isLoggedIn = this.tokenService.isLoggedIn$;


  constructor(
    private adService: AdsService,
    private tokenService: TokenStorageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
      this.currentAd = ad;
      if(user){
        this.currentUser = user;
        this.isAdmin = user.roles.includes('ROLE_ADMIN');
        this.isModerator = user.roles.includes('ROLE_MODERATOR');
        this.isOwner = this.currentUser.id === this.currentAd.owner;
      }
    })
  }

  handleEdit(){
    this.router.navigate([`/adlist/edit/${this.currentAd._id}`]);
  }

  openDialog(){
    this.showDialog = true;
  }

  handleDialog(resolution: string){
    if(resolution === 'yes'){
      console.log(this.currentAd._id);
      this.showDialog = false;
      this.adService.deleteAd(this.currentAd._id)
      .subscribe({
        next: () => this.router.navigate(['/adlist'])
      })
    } else if(resolution === 'cancel'){
      console.log('cancelled deletion');
      this.showDialog = false;
    }
    }
  }
