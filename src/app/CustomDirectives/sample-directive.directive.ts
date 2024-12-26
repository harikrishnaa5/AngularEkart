import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {
@HostBinding('value') inputVal: string = 'hi there'

@HostListener('focus') logMessage() {
  console.log('input is focused from sample-directive')
}

  constructor() { }

}
