import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplitNavService } from './split-nav.service';
import { Page1 } from "../pages/page1/page1";
import { Page2 } from "../pages/page2/page2";

@Component({
    template: `
  <ion-header>
  <ion-navbar><ion-title>Navigation</ion-title></ion-navbar>
  </ion-header>
  <ion-content>
  <ion-list>
    <button ion-item *ngFor="let page of pages" (click)="openPage(page)">{{page.title}}</button>

    <button ion-item (click)="push()">Push</button>
  </ion-list>
  </ion-content>
  `
})
export class SideMenuComponent {

    pages: Array<{title: string, component: any}>;

    constructor(private splitNavService: SplitNavService, private navController: NavController) {
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Page One', component: Page1 },
            { title: 'Page Two', component: Page2 }
        ];
    }

    push() {
        this.navController.push(SideMenuComponent);
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.splitNavService.mainNavController.setRoot(page.component);
    }
}