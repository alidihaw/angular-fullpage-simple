import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
