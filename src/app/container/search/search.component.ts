import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChange(){
    this.searchTextChanged.emit(this.searchText)
  }
  onInputChange(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value
    console.log(this.searchText)
    this.searchTextChanged.emit(this.searchText)
  }
}
