import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appSetStyle]'
})
export class SetStyleDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'green')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'orange')
    this.renderer.setStyle(this.element.nativeElement, 'margin-left', '5px')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'color')
    this.renderer.removeStyle(this.element.nativeElement, 'margin-left')
  }

}
