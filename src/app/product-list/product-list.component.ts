import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart = 0
  product = {
    name: 'Galaxy S24 Ultra',
    price: 899,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: "../../assets/s24 ultra.jpg"
  };
  getDiscountedPrice () {
    return this.product.price * (100 - this.product.discount) / 100 
  }
  isStockAvailable () {
    return this.product.inStock > 0
  }
  decrement() {
    this.addToCart > 0 ? --this.addToCart : 0
  }
  increment() {
    if(this.product.inStock > this.addToCart)
      ++this.addToCart
  }
}
