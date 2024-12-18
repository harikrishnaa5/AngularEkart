import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  buttonClicked: string = 'button is clicked';
  @Output()
  isButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  onButtonClick() {
    this.isButtonClicked.emit(this.buttonClicked);
  }
}
