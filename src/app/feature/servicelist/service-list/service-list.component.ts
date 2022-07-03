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
      console.log(this.allTableData)
    }
    );
  }

  editRow(row: IService) {
    // if (row.id === 0) {
    //   this.userService.addUser(row).subscribe((newUser: User) => {
    //     row.id = newUser.id;
    //     row.isEdit = false;
    //   });
    // } else {
    //   this.userService.updateUser(row).subscribe(() => (row.isEdit = false));
    // }
  }



  removeRow(id: number) {
    // this.userService.deleteUser(id).subscribe(() => {
    //   this.dataSource.data = this.dataSource.data.filter(
    //     (u: User) => u.id !== id
    //   );
    // });
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
