import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule, AngularFullpageModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicExampleComponent implements OnInit {
  config;
  fullpageApi: any;

  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
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
