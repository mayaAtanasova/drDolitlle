import { Component, OnInit, Input } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent implements OnInit {

  @Input() ad: IAd;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.ad);
  }

}
