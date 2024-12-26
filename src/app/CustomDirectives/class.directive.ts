import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }
//provide an alias in Input which matches the directive selector if input property needs to be of different name  
  @Input('appClass') set display(object: Object) {
    let entries = Object.entries(object)
    for(let item of entries){
      let [className, condition] = item
      if(condition)
        this.renderer.addClass(this.element.nativeElement, className)
    }
  }

}
