import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdItemComponent } from './ad-item/ad-item.component';
import { AdListComponent } from './ad-list/ad-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AdminPageComponent,
    AdListComponent,
    AdItemComponent,
    AdListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
