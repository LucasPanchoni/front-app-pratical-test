import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() login: string;

  constructor() { }

  ngOnInit(): void {
    this.login = window.sessionStorage.getItem('login');
  }

  logout(): void{
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('login');
    window.sessionStorage.removeItem('planID');
  }

}
