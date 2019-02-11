import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  platformAndroid: boolean;
  platformIos: boolean;
  platformDesktop: boolean;
 
  constructor(public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform) {
   
    this.platformAndroid = platform.is('android');
    this.platformIos = platform.is('ios');
    this.platformDesktop = platform.is('core');
  }
  openLink(url:string){
   
    this.iab.create(url, '_system');
  }

 
 
 

}
