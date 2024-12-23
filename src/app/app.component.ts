import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';
  inputVal: string[] = ['Hi'];
  constructor() {
    console.log('This is the constructor of AppComponent');
  }
  onButtonClicked(inputEl: HTMLInputElement) {
    this.inputVal.push(inputEl.value);
  }
}
