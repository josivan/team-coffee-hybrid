import { Component } from '@angular/core';

import { NavController, ActionSheetController, AlertController, FabContainer } from 'ionic-angular';

import { Ranking } from '../../app/components/ranking/ranking';

const RANKING: Ranking[] = [
    {
      name: 'Wagner',
      last_coffee: '1 min',
      icon: 'trophy',
      icon_color: 'gold'
    },
    {
      name: 'Flávia',
      last_coffee: '2 days',
      icon: 'medal',
      icon_color: 'gold'
    },
    {
      name: 'Alison',
      last_coffee: '1 day',
      icon: 'medal',
      icon_color: 'silver'
    },
    {
      name: 'Josivan',
      last_coffee: '1 min',
      icon: 'medal',
      icon_color: 'bronze'
    }
  ];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ranking = RANKING;

  public color: string = 'primary';
  public position: string = 'right';
  public icon: string = 'cart';
  public enableBackdropDismiss: boolean = true;
  public buttonColor: string = 'light';

  constructor(
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController
    ) { }

  public buttons =  [
    {
      icon: 'add',
      title: 'Sugar',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    },
    {
      icon: 'checkmark',
      title: 'Sugar',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    },
    {
      icon: 'add', 
      title: 'Coffee',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Close on click');
      }
    },
    {
      icon: 'checkmark',
      title: 'Coffe',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    }
  ];

  openMenu(fab: FabContainer) {
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
          text: 'Cancel',
          icon: 'close'
        }
      ]
    });
    fab.close();
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
