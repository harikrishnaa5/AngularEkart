import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChildren('inputEl') inputElement : QueryList<ElementRef>
  fullName: string = ''
  show() {
    this.inputElement.forEach(el => {
      this.fullName += el.nativeElement.value + " "
    })
    this.fullName.trim()
  }
  
}
