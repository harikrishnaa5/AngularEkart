import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output()
  isButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  
  
  @ViewChild(AlertComponent) alertComponent: AlertComponent

  onButtonClick() {
    // this.isButtonClicked.emit(this.buttonClicked);
    alert(this.alertComponent.alertMessage)
  }
}
