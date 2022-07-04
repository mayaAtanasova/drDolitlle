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
  showDialog = false;

  selectedRowIds: string[] = [];


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
    this.servicesService.deleteService(id).subscribe(data => {
      this.allTableData = this.allTableData.filter(item => item._id !== data._id);
    });
  }

  removeSelectedRows(rows: IService[]) { 
    this.selectedRowIds = rows.map(item => item._id);
    this.showDialog = true;
  }

  handleDialog(resolution: string){
    if(resolution === 'yes'){
      this.showDialog = false;
      
      this.servicesService
      .deleteServices(this.selectedRowIds)
      .subscribe((data: any)  => {
        this.allTableData = this.allTableData.filter(service => !this.selectedRowIds.includes(service._id));
      });

    } else if(resolution === 'cancel'){
      this.showDialog = false;
    }
    }
}
