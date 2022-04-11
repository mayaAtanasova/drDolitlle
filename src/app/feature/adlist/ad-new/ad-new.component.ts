import { HttpEvent } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/core/services/ads.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { IAd } from '../../../core/interfaces/ad';
import PhoneValidation from './phone-validation';
import { requiredFileType } from './required-file-type';


@Component({
  selector: 'app-ad-new',
  templateUrl: './ad-new.component.html',
  styleUrls: ['./ad-new.component.css']
})
export class AdNewComponent implements OnInit {

  file: Blob;

  form: FormGroup = new FormGroup({
    category: new FormControl(''),
    description: new FormControl(''),
    contactName: new FormControl(''),
    contactPhone: new FormControl(''),
    contactEmail: new FormControl(''),
    adImage: new FormControl('')
  });

  isSuccessful = false;
  isSubmitted = false;
  errorMessage = '';
  roles: any;

  ad: IAd = {
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

  constructor(
    private adService: AdsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: [this.ad.category, [Validators.required]],
      description: [this.ad.description, [Validators.minLength(10), Validators.maxLength(500)]],
      contactName: [this.ad.contactName, [Validators.required]],
      contactPhone: [this.ad.contactPhone,],
      contactEmail: [this.ad.contactEmail, [Validators.email]],
      adImage: [null, [requiredFileType()]]
    },
      {
        validators: [PhoneValidation.checkPhoneNumber('contactPhone')]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onFileSelect(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element);
    let fileList: FileList | null = element.files;
    if (fileList!.length > 0) {
      const file = fileList![0];
      console.log(file.type);
      this.file = file;
    }
  }

  onSubmit(): void {
    console.log('submit clicked');
    console.log(this.form.value);
    const formValue = this.form.value;
    const formData = new FormData();
    const userId = this.tokenService.getUser()!.id;
    formData.append('category', formValue['category'])
    formData.append('description', formValue['description']);
    formData.append('contactPhone', formValue['contactPhone']);
    formData.append('contactEmail', formValue['contactEmail']);
    formData.append('contactName', formValue['contactName']);
    formData.append('adImage', this.file);
    formData.append('owner', userId);

    console.log(formData.get('adImage'));

    this.adService.createAd(formData)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.isSubmitted = true;
      },
      error: err => console.error(err)
    });
  }
}
