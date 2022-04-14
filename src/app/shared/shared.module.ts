import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdItemComponent } from './ad-item/ad-item.component';



@NgModule({
  declarations: [
    AdItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdItemComponent
  ]
})
export class SharedModule { }
