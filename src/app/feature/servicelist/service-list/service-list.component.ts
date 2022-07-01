import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource = new MatTableDataSource<IService>();
  manipulationData: IService[] = [];
  hospisData: IService[] = [];
  surgeryData: IService[] = [];
  examData: IService[] = [];
  labData: IService[] = [];
  dewormData: IService[] = [];
  vaccineData: IService[] = [];
  groomData: IService[] = [];
  administrationData: IService[] = [];


  constructor(public dialog: MatDialog, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getAllServices().subscribe(data => {
      this.dataSource.data = data;
      this.manipulationData = data.filter(item => item.category === 'manipulation');
      this.hospisData = data.filter(item => item.category === 'hospis');
      this.surgeryData = data.filter(item => item.category === 'surgery');
      this.examData = data.filter(item => item.category === 'exam');
      this.labData = data.filter(item => item.category === 'lab');
      this.dewormData = data.filter(item => item.category === 'deworm');
      this.vaccineData = data.filter(item => item.category === 'vaccine');
      this.groomData = data.filter(item => item.category === 'groom');
      this.administrationData = data.filter(item => item.category === 'administration');

      console.log(this.administrationData);
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

  addRow(event: Event) {
    // const newRow: User = {
    //   id: 0,
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   birthDate: '',
    //   isEdit: true,
    //   isSelected: false,
    // };
    // this.dataSource.data = [newRow, ...this.dataSource.data];
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

  inputHandler(e: any, id: number, key: string) {
    // if (!this.valid[id]) {
    //   this.valid[id] = {};
    // }
    // this.valid[id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    // if (this.valid[id]) {
    //   return Object.values(this.valid[id]).some((item) => item === false);
    // }
    // return false;
  }

}
