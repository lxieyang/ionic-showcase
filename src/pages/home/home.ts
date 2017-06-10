import { FileEdit } from '../file-edit/file-edit';
import { FileDetail } from '../file-detail/file-detail';
import { FileFilter } from '../file-filter/file-filter';
import { SearchDetail } from '../search-detail/search-detail';


import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  file_type_map = {
    "pdf": "book",
    "text": "document",
    "audio": "recording"
  }


  title: any;

  this_week_files: Array<{
    name: string, 
    lesson: string, 
    lesson_badge: any, 
    author: string, 
    type: string,
    is_read: boolean,
    is_like: boolean
  }> = [];

  earlier_files: Array<{
    name: string, 
    lesson: string, 
    lesson_badge: any, 
    author: string, 
    type: string,
    is_read: boolean,
    is_like: boolean
  }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      this.title = navParams.get('title');

      // fae data for this week's file
      this.this_week_files.push({
        name: "Chapter 1 Vocab",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "book",
        is_read: true,
        is_like: false
      });

      this.this_week_files.push({
        name: "Video transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_read: false,
        is_like: true
      });

      this.this_week_files.push({
        name: "Chapter 2 vocab recording",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "recording",
        is_read: false,
        is_like: true
      });

      this.this_week_files.push({
        name: "ボキャブラリーリスト1",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_read: true,
        is_like: false
      });

      this.this_week_files.push({
        name: "Friday lesson transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_read: true,
        is_like: true
      });






      // earlier
      this.earlier_files.push({
        name: "Video transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_read: false,
        is_like: true
      });

      this.earlier_files.push({
        name: "Chapter 1 Vocab",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "book",
        is_read: true,
        is_like: false
      });

      this.earlier_files.push({
        name: "ボキャブラリーリスト4",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_read: false,
        is_like: false
      });

      this.earlier_files.push({
        name: "Friday lesson transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_read: true,
        is_like: true
      });

      this.earlier_files.push({
        name: "Chapter 2 vocab recording",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "recording",
        is_read: false,
        is_like: true
      });

      this.earlier_files.push({
        name: "ボキャブラリーリスト1",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_read: true,
        is_like: false
      });



  }

  searchTapped(event) {
    this.navCtrl.push(SearchDetail);
  }

  presentFileFilter() {
      let modal = this.modalCtrl.create(FileFilter);  //, this.excludeTracks);
      modal.present();

      modal.onWillDismiss((data: any[]) => {
        if (data) {
          // this.excludeTracks = data;
          // this.updateSchedule();
        }
      });
  }

  presentNewFileModal() {
      let modal = this.modalCtrl.create(FileEdit);  //, this.excludeTracks);
      modal.present();

      modal.onWillDismiss((data: any[]) => {
        if (data) {
          // this.excludeTracks = data;
          // this.updateSchedule();
        }
      });
  }
  

  fileTapped(event, input_file) {
    this.navCtrl.push(FileDetail, {
      file: input_file
    });
  }

  checkUnread(file) {
    return file.is_read == false;
  }


  presentMoreActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Sort by...',
          handler: () => {
            console.log('Sort by... clicked');
          }
        },
        {
          text: 'Select...',
          handler: () => {
            console.log('Select... clicked');
          }
        },
        {
          text: 'Select all',
          handler: () => {
            console.log('Select all clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
