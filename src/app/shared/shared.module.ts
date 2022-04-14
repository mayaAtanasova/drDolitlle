import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './shared-routing.module';
import { AdItemComponent } from './ad-item/ad-item.component';



@NgModule({
  declarations: [
    AdItemComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [
    AdItemComponent
  ]
})
export class SharedModule { }
