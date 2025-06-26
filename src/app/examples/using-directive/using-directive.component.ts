import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FullpageDirective } from '@fullpage/angular-fullpage';
import { fullpageOptions } from 'fullpage.js/dist/fullpage.extensions.min';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-using-directive',
  standalone: true,
  imports: [CommonModule, AngularFullpageModule],
  templateUrl: './using-directive.component.html',
  styleUrls: ['./using-directive.component.css'],
})
export class UsingDirectiveComponent implements OnInit, AfterViewInit {
  config: fullpageOptions;
  fullpageApi: any;

  @ViewChild(FullpageDirective)
  fullpageDirective!: FullpageDirective;

  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'asdf',
      sectionsColor: [
        '#7BAABE',
        'whitesmoke',
        '#7BAABE',
        'whitesmoke',
        '#7BAABE',
      ],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
      credits: {
        enabled: false,
      },
    };
  }

  ngAfterViewInit() {
    this.fullpageApi = this.fullpageDirective.fullpageApi;
  }

  ngOnInit() {}
}
