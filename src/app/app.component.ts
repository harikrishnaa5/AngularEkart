import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';
  inputVal: string = '';
  toDestroy: boolean = false
  constructor() {
    // console.log('This is the constructor of AppComponent');
  }

  // ngAfterViewInit() {
  //   // console.log("ngAfterViewInit of App component")
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked in app component')
  // }
  onDestroy() {
    this.toDestroy = !this.toDestroy
  }
  onButtonClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
