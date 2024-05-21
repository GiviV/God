import { Component, Input, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { GodCard } from '../godCard';
import { GodsService } from '../services/gods.service';
import { NgFor } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-gods',
  standalone: true,
  imports: [CardComponent, NgFor, SearchComponent],
  templateUrl: './gods.component.html',
  styleUrl: './gods.component.css'
})
export class GodsComponent {

  godList: GodCard[] = [];
  godService: GodsService = inject(GodsService)
 


  searchedText:string = '';

  takeValue(str:string):void{
    this.searchedText = str
    console.log(this.searchedText)
  }



  constructor() {

    this.godService.getAllGods().then((godList: GodCard[]) => {
      this.godList = godList
    })
  }

}
