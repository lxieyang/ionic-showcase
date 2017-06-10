import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, NavParams, AlertController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-file-edit',
  templateUrl: 'file-edit.html'
})
export class FileEdit {

  // file: any;
  filename: any;
  content: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
      // this.file = navParams.get('file');
      
  }

  


  doSaveAlert() {
    if (!this.filename) {
      let alert = this.alertCtrl.create({
        title: 'Please name the file!',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Saved!',
        message: this.filename + ' has been saved! It will be automatically synced to the cloud.',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  doDiscardAlert() {
    let alert = this.alertCtrl.create({
      title: 'Watch out!',
      message: 'Are you sure you want to leave without saving the file?',
      buttons: [
        {
          text: "Back to edit",
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: "I'm sure!",
          handler: () => {
            this.dismiss();
            console.log("I'm sure!");
          }
        }
      ]
    });
    alert.present()
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

}
