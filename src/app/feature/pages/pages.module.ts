import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdItemComponent } from '../../shared/ad-item/ad-item.component';
import { AdListComponent } from '../adlist/ad-list/ad-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdNewComponent } from '../adlist/ad-new/ad-new.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PagesModule { }
