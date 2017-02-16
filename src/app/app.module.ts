import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/HomePage/HomePage';
import { Page2 } from '../pages/page2/page2';
import { RestaurantPage } from '../pages/restaurant/restaurant';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2,
    RestaurantPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2,
    RestaurantPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
