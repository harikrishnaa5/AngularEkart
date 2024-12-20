import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paraEl: ElementRef // selector is template reference variable
  @ContentChild(TestComponent) testEl: TestComponent // selector is component 
  @ContentChildren('para') paraElements: QueryList<ElementRef>
  @ContentChildren(TestComponent) testComponentElements: QueryList<TestComponent>

  stylePara() {
    // console.log(this.paraEl.nativeElement, "para")
    console.log(this.testEl.name, 'test component')
    this.paraElements.forEach((el) => console.log(el.nativeElement))
    this.testComponentElements.forEach((comp) => console.log(comp.name))
  }
}
