import { HttpEvent } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces/user';
import { AdsService } from 'src/app/core/services/ads.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { IAd } from '../../../core/interfaces/ad';
import PhoneValidation from './phone-validation';
import { requiredFileType } from './required-file-type';


@Component({
  selector: 'app-pad-new',
  templateUrl: './ad-new.component.html',
  styleUrls: ['./ad-new.component.css']
})
export class AdNewComponent implements OnInit {

  isSuccessful = false;
  isSubmitted = false;
  errorMessage = '';
  roles: any;
  viewMode = 'new';

  currentAd: IAd = {
    _id: '',
    category: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    owner: '',
    adImage: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  currentUser: IUser;

  constructor(
    private adService: AdsService,
    private router: Router,
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.tokenService.currentUser$.subscribe({
      next: (user) => { if (user) { 
        this.currentUser = user
      };
    }
    })
  }

  onSubmit(formData:FormData): void {
    
    this.adService.createAd(formData)
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
