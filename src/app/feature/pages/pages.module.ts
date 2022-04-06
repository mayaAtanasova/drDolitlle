import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdvertsPageComponent } from './adverts-page/adverts-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AdminPageComponent,
    AdvertsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
