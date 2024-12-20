import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges {
  title: string = 'Demo Title';
  @Input()
  message: string;
  constructor() {
    console.log('The constructor of DemoComponent');
    console.log(this.title, 'title');
    console.log(this.message, 'message');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'this is the message');
  }
}
