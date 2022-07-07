import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IAd } from 'src/app/core/interfaces/ad';
import { IUser } from 'src/app/core/interfaces/user';
import PhoneValidation from '../ad-new/phone-validation';
import { requiredFileType } from '../ad-new/required-file-type';
import { CompressImageService } from 'src/app/core/services/compress.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  @Input() currentAd: IAd;
  @Input() currentUser: IUser;
  @Input() viewMode: string;

  @Output() dataCollected: EventEmitter<any> = new EventEmitter;

  file: Blob | null;
  localImgUrl: string | ArrayBuffer | null;

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private compressImage: CompressImageService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category: [this.currentAd.category, [Validators.required]],
      description: [this.currentAd.description, [Validators.minLength(10), Validators.maxLength(500)]],
      contactName: [this.currentAd.contactName, [Validators.required]],
      contactPhone: [this.currentAd.contactPhone,],
      contactEmail: [this.currentAd.contactEmail, [Validators.email]],
      adImage: [null, [requiredFileType()]]
    },
      {
        validators: [PhoneValidation.checkPhoneNumber('contactPhone')]
      }
    )
    this.localImgUrl = this.currentAd.adImage!;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onFileSelect(event: Event) {
    const element = event.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList!.length > 0) {
      const file = fileList![0];

      this.compressImage.compress(file)
        .pipe(take(1))
        .subscribe(compressedImage => {
          console.log(`Image size after compression ${compressedImage.size} bytes.`);
          this.file = compressedImage;
        });
      // const file = fileList![0];
      // this.file = file;
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = (_event) => {
      //   this.localImgUrl = reader.result;
      // }
    }
  }

  onSubmitButtonPressed() {
    const formValue = this.form.value;
    const formData = new FormData();
    const userId = this.currentUser.id;
    formData.append('category', formValue['category'])
    formData.append('description', formValue['description']);
    formData.append('contactPhone', formValue['contactPhone']);
    formData.append('contactEmail', formValue['contactEmail']);
    formData.append('contactName', formValue['contactName']);
    formData.append('adImage', this.file!);
    formData.append('owner', userId);

    this.dataCollected.emit(formData);
  }

  removeImage(event: any) {
    event.preventDefault();
    this.file = null;
    this.localImgUrl = '';
  }
}
