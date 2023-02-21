import { NavStaticLink } from './../../../interfaces/nav-static-link';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-static-link',
  templateUrl: './nav-static-link.component.html',
  styleUrls: ['./nav-static-link.component.scss']
})
export class NavStaticLinkComponent implements OnInit {

  @Input() navStaticLink: NavStaticLink = {} as NavStaticLink;

  constructor() { }

  ngOnInit(): void {
  }

}
