import { Component, Input } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-alert-two',
  templateUrl: './alert-two.component.html',
  styleUrls: ['./alert-two.component.css']
})
export class AlertTwoComponent {
  @Input()
  alertTwoMessage: string = '' 
  showAlert(){
    this.alertTwoMessage && alert(this.alertTwoMessage)
  }
}
