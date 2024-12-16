import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dimmy text of the printing and typesetting industry",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/x/p/-original-imagxe2gr3qrhmyf.jpeg?q=90&crop=false",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miller",
      description: "Lorem Ipsum is simply dimmy text of the printing and typesetting industry",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7],
      price: 160,
      is_in_inventory: true,
      items_left: 6,
      imageURL: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/m/m/u/-original-imah4ehazrxjznmh.jpeg?q=90&crop=false",
      slug: "nike-react-miller"
    },
    {
      id: 3,
      name: "Adidas Running",
      description: "Lorem Ipsum is simply dimmy text of the printing and typesetting industry",
      brand: "ADIDAS",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 9, 10],
      price: 160,
      is_in_inventory: true,
      items_left: 4,
      imageURL: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/a/d/b/-original-imah4kg787urysgy.jpeg?q=90&crop=false",
      slug: "addidas-running"
    },
    {
      id: 4,
      name: "Adidas Running",
      description: "Lorem Ipsum is simply dimmy text of the printing and typesetting industry",
      brand: "ADIDAS",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 9, 10],
      price: 160,
      is_in_inventory: true,
      items_left: 4,
      imageURL: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/a/d/b/-original-imah4kg787urysgy.jpeg?q=90&crop=false",
      slug: "addidas-running"
    },
  ]
}
