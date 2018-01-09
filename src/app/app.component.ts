import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter: number;

  constructor() {
    this.counter = 17;
  }

  increase() {
    console.info('+1');
  }

  decrease() {
    console.info('-1');
  }

}
