import { Component, Input, OnInit } from '@angular/core';
import { IService, ServiceColumns } from 'src/app/core/interfaces/service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  columnsSchema: any = ServiceColumns;
  displayedColumns: string[] = ServiceColumns.map(col => col.key);


  @Input() title: string;
  @Input() tableData: IService[];
  @Input() editRow: any;
  @Input() removeRow: any;
  @Input() disableSubmit: any;
  @Input() removeSelectedRows: any;
  @Input() addRow: any;



  constructor() { }

  ngOnInit(): void {
  }

}
