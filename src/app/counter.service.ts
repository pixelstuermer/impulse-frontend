import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Counter } from './app.component';

@Injectable()
export class CounterService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://impulse-backend.herokuapp.com/api';
  }

  getCounter(): Observable<Counter> {
    return this.http.get<Counter>(this.baseUrl + '/counter');
  }

  increaseCounter() {
    this.http.post(this.baseUrl + '/counter/increase', null, {}).subscribe();
  }

  decreaseCounter() {
    this.http.post(this.baseUrl + '/counter/decrease', null, {}).subscribe();
  }

}
