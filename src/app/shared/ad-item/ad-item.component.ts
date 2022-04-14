import { Component, OnInit, Input } from '@angular/core';
import { IAd } from 'src/app/core/interfaces/ad';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent implements OnInit {

  @Input() ad: IAd;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetails(id: string){
    console.log(id);
    this.router.navigate([`/adlist/${this.ad._id}`])
  }

}
