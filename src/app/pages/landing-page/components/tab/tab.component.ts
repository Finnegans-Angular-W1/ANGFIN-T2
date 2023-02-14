import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title:string = '';
  @Input() features:string[] = [];
  @Input() description:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
