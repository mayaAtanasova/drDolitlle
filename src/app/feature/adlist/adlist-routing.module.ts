import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdNewComponent } from './ad-new/ad-new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdListComponent,
},
{
    path: 'new',
    canActivate: [AuthGuard],
    component: AdNewComponent,
},
{
    path: ':adId',
    component: AdDetailComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdlistRoutingModule { }
