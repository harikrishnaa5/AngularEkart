import { 
  AfterContentChecked,
  AfterContentInit, 
  AfterViewInit, 
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  @ViewChild('tempPara') tempPara: ElementRef

  @ContentChild('temp') temp: ElementRef

  title: string = 'Demo Title';
  @Input()
  message: string;
  constructor() {

    console.log('The constructor of DemoComponent');
    // console.log(this.title, 'title');
    // console.log(this.message, 'message');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges hook is called')
    // console.log(changes, 'this is the message');
    // console.log(this.tempPara, 'tempPara in ngOnChanges')
  }
  ngOnInit() {
    // console.log(' ngOnInit hook is called')
    // console.log(this.tempPara, 'tempPara in onInit')
  }
  ngDoCheck() {
    // console.log('ngDoCheck is called')
    // console.log("temp inside ngDoCheck: ",this.temp)
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit')
    // console.log("temp inside ngAfterContentInit: ",this.temp.nativeElement)
  }
  ngAfterContentChecked() {
    console.log('inside ngAfterContentChecked' )
    console.log(this.tempPara?.nativeElement, "temp para ngAfterContentChecked")
  }
  ngAfterViewInit() {
    console.log(this.tempPara.nativeElement, "temp para ngAfterViewInit")
  }

}
