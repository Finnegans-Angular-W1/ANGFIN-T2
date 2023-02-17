import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() color: string = 'bg-stone-800/[0.20]';
  @Input() message:string = 'Cargando...';
  constructor() { }

  ngOnInit(): void {
  }

}
