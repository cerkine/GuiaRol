import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, ModalController, Content, Modal } from 'ionic-angular';


@Component({
 selector: 'page-contact',
 templateUrl: 'contact.html'
})
export class ContactPage {
 
 @ViewChild(Content) content: Content;

 public altura:string;
 public items = ["1.Introducción","2.Descripción","3.Público objetivo","4.Cuenta","5.Funcionalidad de la app", "5.1.Ficha de personaje", "5.2.Mensaje","6.Instalación"];

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
    this.content.scrollTo(0, altura-15, 700);
    }
  });

  modal.present();
  }
}