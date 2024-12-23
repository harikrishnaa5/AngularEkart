import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
//   private element: ElementRef;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
  }
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#36454F';
    // this.element.nativeElement.style.color = 'white';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is an example')
  }
}
