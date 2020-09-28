import { AccountService } from './../../account/shared/account.service';
import { PlansService } from './../shared/plans.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plans } from '../shared/plans';

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.css']
})
export class PlansFormComponent implements OnInit {

  alert = 0;
  changePlan = {
    loginUser: '',
    idPlan: 0,
  };

  @Input()
  plans: Plans;
  idPlanActive: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private plansService: PlansService,
    private accountService: AccountService,

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idPlanActive = parseInt(window.sessionStorage.getItem('planID'), 10);
    if (id) {
      this.plansService.getById(id).subscribe(plans => {
        this.plans = plans;
      });
    }
  }

  onSubmit(): void{
    this.changePlan.loginUser = window.sessionStorage.getItem('login');
    this.changePlan.idPlan = this.plans.id;
    const cast = this.accountService.changePlan(this.changePlan);
    cast.then(
      (data) => {
        if (data){
          this.alert = 1;
        }else{
          this.alert = -1;
        }
      }
    ).catch(() => {
      this.alert = -1;
    });
  }

}
