import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  title: any;

    constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      this.title = navParams.get('title');

  }
  
}
