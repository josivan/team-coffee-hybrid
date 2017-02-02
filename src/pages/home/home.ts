import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    
  }

openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Messages',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'I want coffee!'
        },
        {
          text: 'Coffee is made!'
        },
        {
          text: 'Send a comment'
        }
      ]
    });
    actionSheet.present();
  }
}
