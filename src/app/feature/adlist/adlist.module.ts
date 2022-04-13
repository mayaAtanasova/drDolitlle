import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdlistRoutingModule } from './adlist-routing.module';
import { AdNewComponent } from './ad-new/ad-new.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdFormComponent } from './ad-form/ad-form.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { ConfirmDialogComponent } from 'src/app/core/confirm-dialog/confirm-dialog.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AdNewComponent,
    AdDetailComponent,
    AdFormComponent,
    AdEditComponent,

  ],
  imports: [
    CommonModule,
    AdlistRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AdlistModule { }
