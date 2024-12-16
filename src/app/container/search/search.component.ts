import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = "Men's Wear";
  onInputChange(event: any) {
    this.searchText = event.target.value;
  }
}
