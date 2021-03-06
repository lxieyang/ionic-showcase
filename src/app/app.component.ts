import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { CardsPage } from '../pages/cards/cards';
import { AboutPage } from './../pages/about/about';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { FileEdit } from '../pages/file-edit/file-edit';
import { AudioEdit } from '../pages/audio-edit/audio-edit';
import { Splash } from '../pages/splash/splash';

import { UserData } from '../providers/user-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;    // change to 'HomePage'!
  activePage: any;

  // login:
  login_username: any;
  login_user_email: any;

  // pages: Array<{title: string, component: any, icon: any}>;

  file_pages: Array<{title: string, component: any, icon: any}>;
  utility_pages: Array<{title: string, component: any, icon: any}>;


  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public userData: UserData,
    private storage: Storage) {

    // this.initializeApp();

    // used for an example of ngFor and navigation
    this.file_pages = [
      { title: 'All Files', component: HomePage, icon: 'document' },
      { title: 'Shared with me', component: HomePage, icon: 'people' },
      { title: 'Recent', component: HomePage, icon: 'time' },
      { title: 'Trash', component: HomePage, icon: 'trash' },
    ];

    this.utility_pages = [
      { title: 'Notifications', component: NotificationsPage, icon: 'notifications' },
      { title: 'Messages', component: CardsPage, icon: 'chatbubbles' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' },
      { title: 'About', component: AboutPage, icon: 'stats' }
    ];


    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      let splash = modalCtrl.create(Splash);
      splash.present();

      this.openPage(this.file_pages[0]);   // uncomment this!

      this.storage.ready().then(() => {
        // this.userData.setIsTeacher(false);
        this.storage.set('is_teacher', false);
      });
    });

    

    this.activePage = this.file_pages[0];

    // login info
    this.login_username = "Michael Liu";
    this.login_user_email = "lxieyang@cmu.edu";

  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     // this.splashScreen.hide();
  //     let splash = modalCtrl.create(Splash);
  //     splash.present();

  //     this.storage.ready().then(() => {
  //       // this.userData.setIsTeacher(false);
  //       this.storage.set('is_teacher', false);
  //     });
  //   });
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {title: page.title});
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
  }
}
