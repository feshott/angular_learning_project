import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  time: string;
  items: Array<any>;
  show: boolean;
  inputText: string;
  showClassItem: boolean;

  constructor() {
    this.show = true;
    this.items = ['one', 'two', 'three'];
    this.inputText = 'Hello World!';
    this.showClassItem = true;

    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)

  }

  showClass() {
    this.showClassItem = !this.showClassItem
  }

  myEvent(event) {
    console.log(event)
  }

  ngOnInit() {
  }

}
