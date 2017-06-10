import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardsPage } from '../pages/cards/cards';
import { AboutPage } from '../pages/about/about';
import { SearchDetail } from '../pages/search-detail/search-detail';
import { FileDetail } from '../pages/file-detail/file-detail';
import { FileFilter } from '../pages/file-filter/file-filter';
import { FileEdit } from '../pages/file-edit/file-edit';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { Splash } from '../pages/splash/splash';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UserData } from '../providers/user-data';

import { EmailComposer } from '@ionic-native/email-composer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardsPage,
    AboutPage,
    SearchDetail,
    FileDetail,
    FileFilter,
    FileEdit,
    NotificationsPage,
    SettingsPage,
    Splash
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardsPage,
    AboutPage,
    SearchDetail,
    FileDetail,
    FileFilter,
    FileEdit,
    NotificationsPage,
    SettingsPage,
    Splash
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    EmailComposer,
    UserData
  ]
})
export class AppModule {}
