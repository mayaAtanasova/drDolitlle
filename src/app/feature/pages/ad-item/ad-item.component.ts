import { Component, OnInit, Input } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';

@Component({
  selector: 'ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent implements OnInit {

  defaultImage = 'assets/ad_img.png'
  

  @Input() ad: IAd;

  constructor() { }

  ngOnInit(): void {
  }

}
