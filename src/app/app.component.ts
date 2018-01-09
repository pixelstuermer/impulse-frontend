import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})

export class AppComponent implements OnInit {

  localStorageKey: string;
  counter: number;

  constructor(private counterService: CounterService) {
    this.localStorageKey = 'impulse-counter';
    this.counter = 0;
  }

  ngOnInit() {
    try {
      this.readFromLocalStorage();
    } catch (error) {
      console.error(error);
    }
    this.getCounter();
  }

  getCounter() {
    this.counterService.getCounter().subscribe(res => {
      this.counter = res.counter;
      try {
        this.writeToLocalStorage();
      } catch (error) {
        console.error(error);
      }
    });
  }

  increase() {
    this.counterService.increaseCounter();
    setTimeout(() => {
      this.getCounter();
    }, 2000);
  }

  decrease() {
    this.counterService.decreaseCounter();
    setTimeout(() => {
      this.getCounter();
    }, 2000);
  }

  writeToLocalStorage() {
    localStorage.setItem(this.localStorageKey, this.counter.toString());
  }

  readFromLocalStorage() {
    this.counter = Number.parseInt(localStorage.getItem(this.localStorageKey));
  }

}

export class Counter {
  counter: number;
  increaseCounter: number;
  decreaseCounter: number;
}
