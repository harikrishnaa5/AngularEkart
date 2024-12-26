import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // @Input() textColor: string = 'white'
  // @Input('setBackground') backgroundColor: string = '#36454F'
  @Input('setBackground') setBackground : {
    textColor: string,
    backgroundColor: string
  }
//   private element: ElementRef;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
  }
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#36454F';
    // this.element.nativeElement.style.color = 'white';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.setBackground.backgroundColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.setBackground.textColor);
  }
}
