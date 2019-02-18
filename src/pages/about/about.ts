import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Content } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public altura:string;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,) {  }  
  scrollTo(idElemento){
    let altura = document.getElementById(idElemento).offsetTop;
    this.content.scrollTo(0, altura-15, 700);
  }  
  scrollTop(){
    this.content.scrollToTop(750);
  }
  scrollBottom(){
    this.content.scrollToBottom(750);
  }
 
}
