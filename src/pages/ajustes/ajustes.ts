import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { ModalPage } from "../index.paginas"

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController){}

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }


  mostrar_modal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre:"José Torres", edad: 36} );
    modal.present();

    modal.onDidDismiss(informacion => {

      if (informacion){
        console.log ("Data del modal:");
        console.log(informacion);
      }
      else {
        console.log ("Se cerró sin parámetros");
      }

    })
  }

}
