import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
  selector: 'app-scrolloverflow',
  standalone: true,
  imports: [CommonModule, AngularFullpageModule],
  templateUrl: './scrolloverflow.component.html',
  styleUrls: ['./scrolloverflow.component.css'],
})
export class ScrollOverflowExampleComponent implements OnInit {
  config;
  fullpageApi: any;

  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: [
        'firstPage',
        'secondPage',
        'thirdPage',
        'fourthPage',
        'lastPage',
      ],
      menu: '#menu',
      scrollOverflow: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],

      // events callback
      afterLoad: (_origin: any, _destination: any, _direction: any) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (_width: any, _height: any) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (
        _section: any,
        _origin: any,
        _destination: any,
        _direction: any
      ) => {
        // console.log(destination);
      },
    };
  }

  ngOnInit() {}

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }
}
