import { Component } from '@angular/core';
import { CARD_SVG } from './../../constants/svgsLanding';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component{

  cardSVG = CARD_SVG;

  constructor() { }

}
