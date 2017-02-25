import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/HomePage/HomePage';
import { Page2 } from '../pages/page2/page2';
import { MapPagePage } from '../pages/map-page/map-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2,
    MapPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2,
    MapPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
