import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  
  @Input() title!: string;

  constructor(private route: ActivatedRoute) { 
    
  }
  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
         this.title = params['title'];
         console.log(this.title);
    });
  }
}
