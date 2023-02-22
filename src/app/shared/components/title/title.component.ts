import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  
  @Input() title: String = 'titulo';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){

  }
}