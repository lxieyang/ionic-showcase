import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-file-filter',
  templateUrl: 'file-filter.html',
})
export class FileFilter {

  // tracks: Array<{name: string, isChecked: boolean}> = [];

  people: Array<{name: string, avatar: string, gender: boolean, isChecked: boolean}> = [];

  file_types: Array<{name: string, icon: string, isChecked: boolean}> = [];

  lessons: Array<{name: string, badge: string, idx: number, isChecked: boolean}> = [];


  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // passed in array of track names that should be excluded (unchecked)
    // let excludedTrackNames = this.navParams.data;

    // file types fake data
    this.file_types.push({
      name: "pdf",
      icon: "book",
      isChecked: true
    });
    this.file_types.push({
      name: "text",
      icon: "document",
      isChecked: true
    });
    this.file_types.push({
      name: "audio",
      icon: "recording",
      isChecked: true
    });



    // people fake data
    this.people.push({
      name: "Ian",
      avatar: "assets/img/avatars/ian-avatar.png",
      gender: true,
      isChecked: true
    });

    this.people.push({
      name: "Sarah",
      avatar: "assets/img/avatars/sarah-avatar.png",
      gender: false,
      isChecked: true
    });

    this.people.push({
      name: "Marty",
      avatar: "assets/img/avatars/marty-avatar.png",
      gender: true,
      isChecked: true
    });

    this.people.push({
      name: "Michael",
      avatar: "",
      gender: true,
      isChecked: true
    });

    this.people.push({
      name: "Antonia",
      avatar: "",
      gender: false,
      isChecked: true
    });



    // lesson fake data
    for(var i = 1; i <= 3; i++) {
      this.lessons.push({
        name: "German A1 | Lesson  ",
        badge: "de",
        idx: i,
        isChecked: true
      });
    }

    for(var i = 1; i <= 3; i++) {
      this.lessons.push({
        name: "Adv. Japanese | Lesson  ",
        badge: "jp",
        idx: i,
        isChecked: true
      });
    }

    for(var i = 1; i <= 3; i++) {
      this.lessons.push({
        name: "Chinese L1 | Lesson  ",
        badge: "cn",
        idx: i,
        isChecked: true
      });
    }

  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.file_types.forEach(item => {
      item.isChecked = true;
    });

    this.people.forEach(item => {
      item.isChecked = true;
    });

    this.lessons.forEach(item => {
      item.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    // let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss();
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}