import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Storage } from '@ionic/storage';

import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  is_teacher: boolean;
  role: string = "Teacher";

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
    public storage: Storage) {
      this.updateLoggedInRole();
  }

  showGettingStarted() {
    let browser: any;
    if (!this.is_teacher) {
      browser = this.iab.create("https://www.nesuku.com/help-center");
    } else {
      browser = this.iab.create("https://www.nesuku.com/help-center-teacher");
    }
    browser.show();
  }

  sendFeedback() {
    let email = {
      to: 'andy.hsiao@nesuku.com',
      // cc: 'erika@mustermann.de',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      // attachments: [
      //   'file://img/logo.png',
      //   'res://icon.png',
      //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //   'file://README.pdf'
      // ],
      subject: 'Feedback from ' + 'Michael Liu',
      body: 'Hi, I want to give you guys some feedback about Nesuku!<br>',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  updateLoggedInRole() {
    this.storage.get('is_teacher').then((val) => {
      this.is_teacher = val;
      this.updateDisplayedRole();
    });
  }

  toggleLoggedInRole() {  // this is just for demonstration purposes
    this.is_teacher = !this.is_teacher;
    this.updateDisplayedRole();
  }

  updateDisplayedRole() {
    if(this.is_teacher) {
      this.role = "Teacher";
    } else {
      this.role = "Student";
    }
  }
}
