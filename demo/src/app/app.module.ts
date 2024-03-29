import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RocketsPage } from '../pages/rockets/rockets';
import { Geolocation } from '@ionic-native/geolocation';
import{HttpClientModule} from '@angular/common/http';
import { HTTPService } from './httpservice.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RocketsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RocketsPage
  ],
  providers: [
    Geolocation,
    HTTPService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
