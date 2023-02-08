import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from '../../services/alert-service.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  //Funciona con los inputs por el momento
  //los demás valores de los inputs, lo tiene anotado Brian
  @Input() bg: string = 'bg-red-300';
  @Input() text: string = 'text-red-700';
  @Input() d_line: string = 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z';
  @Input() msg:string = 'Error! Task failed successfully.';

  constructor(private myService:AlertServiceService) { }

  ngOnInit(): void {
  }

}
