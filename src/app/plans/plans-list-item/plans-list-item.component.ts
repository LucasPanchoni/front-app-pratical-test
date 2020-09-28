import { Plans } from './../shared/plans';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-list-item',
  templateUrl: './plans-list-item.component.html',
  styleUrls: ['./plans-list-item.component.css']
})
export class PlansListItemComponent implements OnInit {
  @Input()
  plans: Plans;
  idPlanActive: number;

  constructor() { }

  ngOnInit(): void {
    this.idPlanActive = parseInt(window.sessionStorage.getItem('planID'), 10);
  }

}
