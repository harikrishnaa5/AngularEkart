import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.border') border: string = 'black 1px solid';
  @HostBinding('style.cursor') cursor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white'
    this.border = 'black 1px solid'
    this.textColor = 'black'
    this.cursor = 'pointer' 
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'black'
    this.border = 'black 1px solid'
    this.textColor = 'white'
  }
}
