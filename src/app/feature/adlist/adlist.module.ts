import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdlistRoutingModule } from './adlist-routing.module';
import { AdNewComponent } from './ad-new/ad-new.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdFormComponent } from './ad-form/ad-form.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { CoreModule } from 'src/app/core/core.module';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdItemComponent } from '../../shared/ad-item/ad-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdNewComponent,
    AdDetailComponent,
    AdFormComponent,
    AdEditComponent,
    AdListComponent,
  ],
  imports: [
    CommonModule,
    AdlistRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    FormsModule,
    SharedModule
  ]
})
export class AdlistModule { }
