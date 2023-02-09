import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  
  title : string | undefined = "Titulo";

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(){
    this.route.title.subscribe(resp => {
      this.title = resp?.toString();
    })
  }
}