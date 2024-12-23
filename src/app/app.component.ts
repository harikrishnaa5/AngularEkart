import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';
  inputVal: string = '';
  constructor() {
    console.log('This is the constructor of AppComponent');
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit of App component")
  }
  onButtonClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
