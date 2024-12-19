import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AlertTwoComponent } from './alert-two/alert-two.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output()
  isButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  
  
  @ViewChild(AlertComponent) alertComponent: AlertComponent
  @ViewChild(AlertTwoComponent) alertTwoComponent: AlertTwoComponent

  onButtonClick() {
    let message = this.alertComponent.alertMessage
    this.alertTwoComponent.alertTwoMessage = message
    this.alertTwoComponent.showAlert()
  }
}
