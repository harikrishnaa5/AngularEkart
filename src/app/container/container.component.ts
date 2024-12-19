import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // addToCart = 0
  // product = {
  //   name: 'Galaxy S24 Ultra',
  //   price: 899,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: "../../assets/s24 ultra.jpg"
  // };
  // getDiscountedPrice () {
  //   return this.product.price * (100 - this.product.discount) / 100 
  // }
  // isStockAvailable () {
  //   return this.product.inStock > 0
  // }
  // decrement() {
  //   this.addToCart > 0 ? --this.addToCart : 0
  // }
  // increment() {
  //   if(this.product.inStock > this.addToCart)
  //     ++this.addToCart
  // }
  // fruits: string[] = ['orange', 'mango', 'apple', 'banana']
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent

  searchText: string = ''
  searchTextChangeEvent(value: string){
    this.searchText = value
  }
}
