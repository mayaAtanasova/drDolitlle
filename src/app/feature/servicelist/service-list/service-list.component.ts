import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { IService, ServiceColumns } from 'src/app/core/interfaces/service';
import { ServicesService } from 'src/app/core/services/srvcs.service';
import { ServiceItemComponent } from '../service-item/service-item.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  allTableData: IService[] = [];

  constructor(public dialog: MatDialog, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getAllServices().subscribe(data => {
      this.allTableData = data;
    }
    );
  }

  editRow(row: IService) {
    if (row._id === '') {
      this.servicesService.addService(row).subscribe((newService: IService) => {
        console.log(row);
        row._id = newService._id;
        row.isEdit = false;
      });
    } else {
      this.servicesService.updateService(row).subscribe(() => (row.isEdit = false));
    }
  }

  deleteRow(id: number) {
    this.servicesService.deleteService(id).subscribe(data => {
      this.allTableData = data;
    });
  }

  removeSelectedRows() {
    // const users = this.dataSource.data.filter((u: User) => u.isSelected);
    // this.dialog
    //   .open(ConfirmDialogComponent)
    //   .afterClosed()
    //   .subscribe((confirm) => {
    //     if (confirm) {
    //       this.userService.deleteUsers(users).subscribe(() => {
    //         this.dataSource.data = this.dataSource.data.filter(
    //           (u: User) => !u.isSelected
    //         );
    //       });
    //     }
      // });
  }


}
