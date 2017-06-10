import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  title: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
