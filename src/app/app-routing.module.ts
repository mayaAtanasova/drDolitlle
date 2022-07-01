import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/services/role-guard.service';
import { AdminPageComponent } from './feature/pages/admin-page/admin-page.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
  {
    path: 'adlist',
    loadChildren: () => import('./feature/adlist/adlist.module').then(m => m.AdlistModule)
  },
  {
    path: 'servicelist',
    loadChildren: () => import('./feature/servicelist/servicelist.module').then(m => m.ServicelistModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
}

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
