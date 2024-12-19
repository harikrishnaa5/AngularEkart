import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent

  searchText: string = ''
  searchTextChangeEvent(value: string){
    this.searchText = value
  }

  toggle: boolean = false
  onToggle() {
    this.toggle = !this.toggle
  }
}
