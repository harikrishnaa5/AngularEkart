import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Products';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product

}
