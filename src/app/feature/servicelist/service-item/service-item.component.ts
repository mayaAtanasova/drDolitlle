import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IService, ServiceColumns } from 'src/app/core/interfaces/service';


@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() category: string;
  @Input() tableData: IService[];
  @Input() editRow: any;
  @Input() removeRow: any;
  @Input() removeSelectedRows: any;

  @Output() submitRowForEdit = new EventEmitter;
  @Output() submitRowForDeletion = new EventEmitter;

  columnsSchema: any = ServiceColumns;
  displayedColumns: string[] = ServiceColumns.map(col => col.key);
  valid: any = {};
  dataSource = new MatTableDataSource<IService>();


  titles: { [key: string] : string } = {
    manipulation: 'Манипулации',
    hospis: 'Стационар',
    surgery: 'Хирургия',
    exam: 'Прегледи',
    lab: 'Изследвания',
    deworm: 'Обезпаразитяване',
    vaccine: 'Ваксинация',
    groom: 'Подстригване',
    administration: 'Администрация',
  };

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.tableData.filter(item => item.category === this.category);
  }

  ngOnChanges(changes: any) {
    if (changes.tableData) {
      this.dataSource.data = this.tableData.filter(item => item.category === this.category);
    }
  };

  addRow(event: Event) {
    const newRow: IService = {
      _id: '',
      description: '',
      category: this.category,
      price: '',
      isEdit: true,
      isSelected: false,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  onEditRow(row: IService) {
    this.submitRowForEdit.emit(row);
  };

  onRemoveRow(id: string) {
    this.submitRowForDeletion.emit(id);
  }

  inputHandler(e: any, _id: string, key: string) {
    if (!this.valid[_id]) {
      this.valid[_id] = {};
    }
    this.valid[_id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }

}
