import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Output() onRevealed = new EventEmitter<number>();
  
  constructor() { }

  onReveal(event):void {
    this.onRevealed.emit(this.card.id);
  }

  ngOnInit() {
  }

}
