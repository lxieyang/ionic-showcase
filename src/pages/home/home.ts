import { AudioEdit } from '../audio-edit/audio-edit';
import { FileEdit } from '../file-edit/file-edit';
import { FileDetail } from '../file-detail/file-detail';
import { FileFilter } from '../file-filter/file-filter';
import { SearchDetail } from '../search-detail/search-detail';

import { Component } from '@angular/core';
import { ItemSliding, NavController, ActionSheetController, ModalController, AlertController, NavParams } from 'ionic-angular';

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

  single_file: {
    name: string, 
    lesson: string, 
    lesson_badge: any, 
    author: string, 
    type: string,
    is_recent: boolean,
    is_read: boolean,
    is_like: boolean
  };

  this_week_files: Array<{
    name: string, 
    lesson: string, 
    lesson_badge: any, 
    author: string, 
    type: string,
    is_recent: boolean,
    is_read: boolean,
    is_like: boolean
  }> = [];

  earlier_files: Array<{
    name: string, 
    lesson: string, 
    lesson_badge: any, 
    author: string, 
    type: string,
    is_recent: boolean,
    is_read: boolean,
    is_like: boolean
  }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
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
        is_recent: true,
        is_read: true,
        is_like: false
      });

      this.this_week_files.push({
        name: "Video transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_recent: true,
        is_read: false,
        is_like: true
      });

      this.this_week_files.push({
        name: "Chapter 2 vocab recording",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "recording",
        is_recent: true,
        is_read: false,
        is_like: true
      });

      this.this_week_files.push({
        name: "ボキャブラリーリスト1",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_recent: true,
        is_read: true,
        is_like: false
      });

      this.this_week_files.push({
        name: "Friday lesson transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_recent: true,
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
        is_recent: false,
        is_read: false,
        is_like: true
      });

      this.earlier_files.push({
        name: "Chapter 1 Vocab",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "book",
        is_recent: false,
        is_read: true,
        is_like: false
      });

      this.earlier_files.push({
        name: "ボキャブラリーリスト4",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_recent: false,
        is_read: false,
        is_like: false
      });

      this.earlier_files.push({
        name: "Friday lesson transcript",
        lesson: "Chinese",
        lesson_badge: "cn",
        author: "Marty",
        type: "book",
        is_recent: false,
        is_read: true,
        is_like: true
      });

      this.earlier_files.push({
        name: "Chapter 2 vocab recording",
        lesson: "German",
        lesson_badge: "de",
        author: "Ian",
        type: "recording",
        is_recent: false,
        is_read: false,
        is_like: true
      });

      this.earlier_files.push({
        name: "ボキャブラリーリスト1",
        lesson: "Japanese",
        lesson_badge: "jp",
        author: "Sarah",
        type: "document",
        is_recent: false,
        is_read: true,
        is_like: false
      });



  }


  searchFileIdx(file: any) {
    for(var i = 0; i < this.this_week_files.length; i++) {
      if(
        this.this_week_files[i].name == file.name && 
        this.this_week_files[i].type == file.type && 
        this.this_week_files[i].author == file.author && 
        this.this_week_files[i].lesson == file.lesson &&
        this.this_week_files[i].is_recent == file.is_recent
      ) {
        return {container: 1, idx: i};
      }
    }

    for(var i = 0; i < this.earlier_files.length; i++) {
      if(
        this.earlier_files[i].name == file.name && 
        this.earlier_files[i].type == file.type && 
        this.earlier_files[i].author == file.author && 
        this.earlier_files[i].lesson == file.lesson &&
        this.earlier_files[i].is_recent == file.is_recent
      ) {
        return {container: 2, idx: i};
      }
    }

    return {container: -1, idx: -1};
  }


  toggleReadStatus(file: any) {
    let retVal = this.searchFileIdx(file);
    if (retVal.container == 1) {
      this.this_week_files[retVal.idx].is_read = !this.this_week_files[retVal.idx].is_read;
    } else if (retVal.container == 2) {
      this.earlier_files[retVal.idx].is_read = !this.earlier_files[retVal.idx].is_read;
    }
  }

  toggleLikeStatus(file: any) {
    console.log("Toggling Like Status");
    let retVal = this.searchFileIdx(file);
    if (retVal.container == 1) {
      this.this_week_files[retVal.idx].is_like = !this.this_week_files[retVal.idx].is_like;
    } else if (retVal.container == 2) {
      this.earlier_files[retVal.idx].is_like = !this.earlier_files[retVal.idx].is_like;
    }
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

  presentNewAudioModal() {
      let modal = this.modalCtrl.create(AudioEdit);  //, this.excludeTracks);
      modal.present();

      modal.onWillDismiss((data: any[]) => {
        if (data) {
          // this.excludeTracks = data;
          // this.updateSchedule();
        }
      });
  }

  closeSlidingItem(toBeClosedItem: ItemSliding) {
    toBeClosedItem.close();
  }
  

  fileTapped(event, input_file) {
    this.navCtrl.push(FileDetail, {
      file: input_file
    });
  }

  checkUnread(file) {
    return file.is_read == false;
  }


  presentMoreActionSheet(toBeClosed: ItemSliding, input_file: any) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            toBeClosed.close();
            console.log('Delete... clicked');
          }
        },
        {
          text: 'View',
          handler: () => {
            this.navCtrl.push(FileDetail, {
              file: input_file
            });
          
            toBeClosed.close();
            
            console.log('View... clicked');
          }
        },
        {
          text: 'Edit',
          handler: () => {
            if (input_file.type == "recording") {
              this.navCtrl.push(AudioEdit, {
                file: input_file
              });
            } else if (input_file.type == "document") {
              this.navCtrl.push(FileDetail, {
                file: input_file
              });
            } else {
              let alert = this.alertCtrl.create({
                title: 'Cannot Edit!',
                message: "This file can only be viewed by you!",
                buttons: [{
                  text: "OK",
                  handler: () => {
                    toBeClosed.close();
                    console.log('Cancel clicked');
                  }
                }]
              });
              alert.present();
            }
            console.log('Edit... clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
