import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
  selector: 'app-root',
  template: `
    <div fullpage id="fullpage2" [options]="config" (ref)="getRef($event)">
    <div class="section"><h1>fullPage.js</h1></div>
    <div class="section">
      <div class="slide"><h1>Section 2</h1></div>
      <div class="slide"><h1>Slide 2.2</h1></div>
      <div class="slide"><h1>Slide 2.3</h1></div>
    </div>
    <div class="section"><h1>Section 3</h1></div>
  </div>
  `,
  standalone: true,
  imports: [CommonModule, AngularFullpageModule]
})
export class AppComponent implements OnInit {
  config;
  fullpageApi: any;

  constructor() {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: [
        '#7BAABE',
        'whitesmoke',
        '#7BAABE',
        'whitesmoke',
        '#7BAABE',
      ],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
    };
  }

  ngOnInit() {}

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }
}
