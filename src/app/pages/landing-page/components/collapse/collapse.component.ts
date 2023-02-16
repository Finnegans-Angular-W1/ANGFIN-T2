import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {

  @Input() question:string = '';
  @Input() description:string = '';

  constructor() { }
}
