import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
 textValue: string = 'hello world'

 onFocus() {
  console.log('input is focused')
 }
}
