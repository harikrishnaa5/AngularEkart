import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetAttribute]'
})
export class SetAttributeDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is the product title')
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.renderer.removeAttribute(this.element.nativeElement, 'title')
  }
}
