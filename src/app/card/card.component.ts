import { Component, Input } from '@angular/core';
import { GodCard } from '../godCard';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() god!:GodCard
}
