import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetProperty]'
})
export class SetPropertyDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    
  }
  @HostListener('focus') onFocus() {
    this.renderer.setProperty(this.element.nativeElement, 'value', 'this is input element')
  }

}
