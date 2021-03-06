import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplitNavService } from './split-nav.service';
import { SideMenuComponent } from './side-menu.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SideMenuComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {links: [
      { component: Page2, name: 'List', segment: 'list/:item' }
    ]})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SideMenuComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SplitNavService]
})
export class AppModule {}
