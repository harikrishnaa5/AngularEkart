import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppendChild]'
})
export class AppendChildDirective implements OnInit{

  constructor(private renderer: Renderer2, private element: ElementRef) {

  }
  ngOnInit(): void {
    const div = this.renderer.createElement('div')
    const text = this.renderer.createText('Welcome')

    this.renderer.appendChild(div, text)
    this.renderer.appendChild(this.element.nativeElement, div)
  }


}
