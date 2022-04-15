import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdItemComponent } from './ad-item/ad-item.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AdItemComponent,
    SpinnerComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdItemComponent,
    SpinnerComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
