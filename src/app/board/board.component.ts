import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { CARDS } from '../mock-cards'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards = CARDS;
  points = 0;

  constructor() { 
    this.shuffleInPlace(this.cards);
  }

  onRevealed(cardId: number) {
    this.cards.forEach(card => {
      if (card.id === cardId) {
        card.revealed = true;
      }
    });

    const filteredCards = this.cards.filter(card => card.revealed && !card.locked);

    if (filteredCards.length === 1)
    {
    }
    else if (filteredCards.length === 2 && filteredCards[0].name === filteredCards[1].name)
    {
      this.points += 5;
      filteredCards[0].locked = true;
      filteredCards[1].locked = true;
    }
    else
    {
      this.points--;
      filteredCards[0].revealed = false;
      filteredCards[1].revealed = false;
    }
  }

  shuffleInPlace<T>(array: T[]): T[] {
    // if it's 1 or 0 items, just return
    if (array.length <= 1) return array;
  
    // For each index in array
    for (let i = 0; i < array.length; i++) {
  
      // choose a random not-yet-placed item to place there
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      const randomChoiceIndex = this.getRandom(i, array.length - 1);
  
      // place our random choice in the spot by swapping
      [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }
  
    return array;
  }

  getRandom(floor:number, ceiling:number):number {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

  ngOnInit() {
  }

}
