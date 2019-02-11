import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalBasicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-basico',
  templateUrl: 'modal-basico.html',
})
export class ModalBasicoPage {

  items: Array<string>;
  param1:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.actualizarItems();
  }
 
  actualizarItems(){
   
    this.items = this.navParams.get("array");
 
  }

  getItems(ev: any) {
  
    // Actualizamos todos lo ítems cada vez que hay un cambio
    this.actualizarItems();
 
    // Obtenemos la cadena introducida en el searchBar
    const val = ev.target.value;
 
    // Si la cadena es vacía no filtramos los ítems
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemPulsado(item){
    this.param1 = item;
    this.view.dismiss({p1:this.param1});
  }
}
