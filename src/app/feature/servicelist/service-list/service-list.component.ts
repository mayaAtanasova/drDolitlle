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
      this.servicesService.addService(row).subscribe((data: IService) => {
        this.allTableData.push(data);
        row._id = data._id;
        row.isEdit = false;
      });
    } else {
      this.servicesService.updateService(row).subscribe((data: IService) => (row.isEdit = false));
    }
  }

  deleteRow(id: string) {
    console.log('data id to delete' + id)
    this.servicesService.deleteService(id).subscribe(data => {
      this.allTableData = this.allTableData.filter(item => item._id !== data._id);
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
