import { CARD_SVG } from './../../constants/svgsLanding';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  cardSVG = CARD_SVG;

  constructor() { }

  ngOnInit(): void {
  }

}
