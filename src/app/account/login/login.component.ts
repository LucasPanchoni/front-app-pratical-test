import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert = false;

  login = {
    login: '',
    password: '',
  };

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    try{
      const result = await this.accountService.login(this.login);
      this.router.navigate(['']);
    }catch(error){
      this.alert = true;
    }
  }

}
