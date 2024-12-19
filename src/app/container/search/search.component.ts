import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('inputSearch') searchInputEl: ElementRef //stores a reference to that input element
  onSearchTextChange(){
    this.searchTextChanged.emit(this.searchText)
  }
  onInputChange() {
    this.searchText = this.searchInputEl.nativeElement.value
    // console.log(this.searchText)
    this.searchTextChanged.emit(this.searchText)
  }
}
