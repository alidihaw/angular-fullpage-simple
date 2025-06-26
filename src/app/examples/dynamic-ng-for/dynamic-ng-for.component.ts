import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Component({
  selector: 'app-dynamic-ng-for',
  standalone: true,
  imports: [CommonModule, AngularFullpageModule],
  templateUrl: './dynamic-ng-for.component.html',
  styleUrls: ['./dynamic-ng-for.component.css'],
})
export class DynamicNgForComponent implements OnInit, AfterViewInit {
  @ViewChildren('sectionRef')
  sectionRef!: QueryList<any>;
  config: any;
  fullpageApi: any;
  sections = [1];

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
      navigation: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    };
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.sectionRef.changes.subscribe(() => {
      this.ngForRendred();
    });
  }

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }

  add() {
    const twoDigits = Math.random() * 100;
    this.sections.push(Math.round(twoDigits));
  }

  ngForRendred() {
    console.log('ngFor dom render is done');
    this.fullpageApi.build();
  }
}
