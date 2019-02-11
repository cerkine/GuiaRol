import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, ModalController, Content, Modal } from 'ionic-angular';


@Component({
 selector: 'page-contact',
 templateUrl: 'contact.html'
})
export class ContactPage {
 
 @ViewChild(Content) content: Content;

 public altura:string;
 public items = ["Titulo 1", "Titulo 2", "Titulo 3"];

 constructor(public modalCtrl: ModalController) {  }
 
 scrollTop(){
   this.content.scrollToTop(750);
 }
 scrollBottom(){
   this.content.scrollToBottom(750);
 }
 scrollTo(idElemento){
   let altura = document.getElementById(idElemento).offsetTop;
   this.content.scrollTo(0, altura, 700);
 }

 modalBasico() {
  const modal = this.modalCtrl.create('ModalBasicoPage', {array: this.items});
  modal.onDidDismiss((data)  => {
    if (data !=null){
    let altura = document.getElementById(data.p1).offsetTop;
    this.content.scrollTo(0, altura, 700);
    }
  });

  modal.present();
  }
}