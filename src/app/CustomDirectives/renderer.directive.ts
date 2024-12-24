import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]',
})
export class RendererDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, "card")
  }
}
