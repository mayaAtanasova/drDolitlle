import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicelistRoutingModule } from './servicelist-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceItemComponent } from './service-item/service-item.component';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceItemComponent
  ],
  imports: [
    CommonModule,
    ServicelistRoutingModule,
    CoreModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ], 
  exports: [
    ServiceListComponent,
    ServiceItemComponent
  ]
})
export class ServicelistModule { }
