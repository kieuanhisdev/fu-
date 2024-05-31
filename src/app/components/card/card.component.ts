import {
  Component,
  Input
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  HousingLocation
} from '../../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  template: `
 

  `

})
export class CardComponent {
  @Input() housingLocation!: HousingLocation;
}
