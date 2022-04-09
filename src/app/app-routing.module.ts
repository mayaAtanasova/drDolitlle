import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/services/role-guard.service';
import { AdminPageComponent } from './feature/pages/admin-page/admin-page.component';
import { AdvertsPageComponent } from './feature/pages/adverts-page/adverts-page.component';
import { HomeComponent } from './feature/pages/home/home.component';

const routes: Routes = [
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
  {
    path: 'adverts',
    component: AdvertsPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
