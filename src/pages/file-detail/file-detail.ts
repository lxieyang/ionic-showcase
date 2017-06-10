
import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-file-detail',
  templateUrl: 'file-detail.html'
})
export class FileDetail {

  file: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      this.file = navParams.get('file');

  }

}
