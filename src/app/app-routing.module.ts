import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/services/role-guard.service';
import { AdListComponent } from './feature/adlist/ad-list/ad-list.component';
import { AdminPageComponent } from './feature/pages/admin-page/admin-page.component';
import { HomeComponent } from './feature/pages/home/home.component';

const routes: Routes = [
  {
    path: 'adlist',
    loadChildren: () => import('./feature/adlist/adlist.module').then(m => m.AdlistModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [RoleGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // useHash: true,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
