import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() svg:string = '';
  @Input() feature:string = '';
  @Input() title:string = '';
  @Input() description:string = ''; 
  @Input() button:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
