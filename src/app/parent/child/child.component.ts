import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paraEl: ElementRef // selector is template reference variable
  @ContentChild(TestComponent) testEl: TestComponent // selector is component 

  stylePara() {
    console.log(this.paraEl.nativeElement, "para")
    console.log(this.testEl.name, 'test component')
  }
}
