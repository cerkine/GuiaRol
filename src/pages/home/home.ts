import { Component } from '@angular/core';
import { NavController, Platform, ModalController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  platformAndroid: boolean;
  platformIos: boolean;
  platformDesktop: boolean;
 
  constructor(public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform, public toastCtrl: ToastController) {
   
    this.platformAndroid = platform.is('android');
    this.platformIos = platform.is('ios');
    this.platformDesktop = platform.is('core');
  }
  openLink(url:string){
   
    this.iab.create(url, '_system');
  }

  opentoast(){

    const toast = this.toastCtrl.create({
      message: 'No hay apk para ios.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
 
 
 
 

}
