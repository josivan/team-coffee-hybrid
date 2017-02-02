import { Component } from '@angular/core';

import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    
  }

openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Messages',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'I want coffee!',
          icon: 'add'
        },
        {
          text: 'Coffee is made!',
          icon: 'checkmark'
        },
        {
          text: 'Send a comment',
          icon: 'quote',
          handler: data => this.showPrompt()
        },
        {
          text: 'Need to buy sugar!',
          icon: 'cart'
        },
        {
          text: 'Need to buy coffee polder!',
          icon: 'cart'
        },
        {
          text: 'Cancel',
          icon: 'close'
        }
      ]
    });
    actionSheet.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Comment',
      message: "Enter your comment bellow",
      inputs: [
        {
          name: 'title',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
