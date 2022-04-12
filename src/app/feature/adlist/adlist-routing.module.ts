import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdNewComponent } from './ad-new/ad-new.component';
import { AutorGuard } from './autor-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdListComponent,
},
{
    path: 'new',
    canActivate: [AutorGuard],
    component: AdNewComponent,
},
{
    path: 'edit/:adId',
    canActivate: [AutorGuard],
    component: AdEditComponent,
},
{
    path: ':adId',
    component: AdDetailComponent,
},
];
export const AdlistRoutingModule = RouterModule.forChild(routes);
