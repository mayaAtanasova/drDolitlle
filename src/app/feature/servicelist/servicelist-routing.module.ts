import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ServiceListComponent,
},

];
export const ServicelistRoutingModule = RouterModule.forChild(routes);
