import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() message: string;

  @Output() dialogResolution: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onDelBtnPressed(){
    this.dialogResolution.emit('yes');
  }

  onCancelBtnPressed(){
    this.dialogResolution.emit('cancel');
  }

  onBkgrdPressed(){
    this.dialogResolution.emit('cancel');
  }

}
