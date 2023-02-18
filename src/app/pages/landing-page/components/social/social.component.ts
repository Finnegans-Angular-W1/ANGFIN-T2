import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input() socialItem:any = {};

  @Input() title:string = '';
  @Input() description:string = '';

  @Input() userSocial:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
