import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  searchValue:string = '';

  @Output() searchTxt = new EventEmitter<string>()

  searchedValue(){
    this.searchTxt.emit(this.searchValue)
  }

}
