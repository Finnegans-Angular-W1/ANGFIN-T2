import { ViewChild, Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import * as AOS from "aos";

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  // changeSectionHeader(sectionId: any) {
  //   console.log(sectionId);
  //   this.actualSection = sectionId;
  // }

  @ViewChild('scrollableSection', { static: false }) scrollableSection!: ElementRef<HTMLDivElement>;
  
  activeSection = 1;

  ngOnInit() {
    AOS.init();
    AOS.refresh()

  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.65]
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'section1':
              this.activeSection = 1;
              break;
            case 'section2':
              this.activeSection = 2;
              break;
            case 'section3':
              this.activeSection = 3;
              break;
            case 'section4':
              this.activeSection = 4;
              break;
            case 'section5':
              this.activeSection = 5;
              break;
          }
        }
      });
    }, options);

    const sections = this.scrollableSection.nativeElement.children;
    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }

  }



}
