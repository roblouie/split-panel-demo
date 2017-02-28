import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { SideMenuComponent } from "./side-menu.component";
import { SplitNavService } from './split-nav.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('sideMenu') sideNav: Nav;
  @ViewChild('content') contentNav: Nav;

  mainRoot: any = Page1;
  sidePanelRoot: any = SideMenuComponent;

  constructor(public platform: Platform, private splitNavService: SplitNavService, private app: App) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.splitNavService.registerNavControllers(this.sideNav, this.contentNav);

      console.log(this.app.getRootNav());
    });
  }


}
