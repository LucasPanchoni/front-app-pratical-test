import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from './plans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  plasList: Plans[];

  getAll(): Observable <Plans[]> {
    return this.http.get<Plans[]>(`${environment.api}/plans`);
  }

  getById(id: string): Observable <Plans> {
    return this.http.get<Plans>(`${environment.api}/plans/${id}`);
  }
}
