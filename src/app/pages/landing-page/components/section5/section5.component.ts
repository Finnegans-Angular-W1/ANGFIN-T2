import { SocialI } from './../../interfaces/social';
import { Component, OnInit } from '@angular/core';

import { IG_SVG, FB_SVG, TW_SVG } from './../../constants/socialSVG';
@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

  fbSocial:SocialI = { title: '', description: '', userSocial: '', svg: '' }
  igSocial:SocialI = { title: '', description: '', userSocial: '', svg: '' }
  twSocial:SocialI = { title: '', description: '', userSocial: '', svg: '' }

  constructor() { }

  ngOnInit(): void {
    this.fbSocial = {
      title: 'Alky Bank E-Wallet',
      description: 'Facebook',
      userSocial: 'AlkyBank',
      svg: FB_SVG
    }

    this.igSocial = {
      title: 'Alky Bank E-Wallet',
      description: 'Instagram',
      userSocial: '_AlkyBank',
      svg: IG_SVG
    }

    this.twSocial = {
      title: 'Alky Bank',
      description: 'Twitter',
      userSocial: 'AlkyBank',
      svg: TW_SVG
    }
  }
}
