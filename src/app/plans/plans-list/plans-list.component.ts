import { PlansService } from './../shared/plans.service';
import { Component, OnInit } from '@angular/core';
import { Plans } from '../shared/plans';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {

  plansList: Plans[] = [];

  constructor(private plansService: PlansService) { }

  ngOnInit(): void {
    this.plansService.getAll().subscribe(plansList => {
      this.plansList = plansList;
    });
  }

}
