import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges, OnInit {
  @ViewChild('tempPara') tempPara: ElementRef
  title: string = 'Demo Title';
  @Input()
  message: string[];
  constructor() {

    console.log('The constructor of DemoComponent');
    console.log(this.title, 'title');
    console.log(this.message, 'message');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges hook is called')
    console.log(changes, 'this is the message');
    console.log(this.tempPara, 'tempPara in ngOnChanges')
  }
  ngOnInit() {
    console.log(' ngOnInit hook is called')
    console.log(this.tempPara, 'tempPara in onInit')
  }
}
