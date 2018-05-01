import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from '../../app/interfaces/evento.interface';

/**
 * Generated class for the CrearEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-evento',
  templateUrl: 'crear-evento.html',
})
export class CrearEventoPage {

  evento: Evento =  { id:'',motivo : '', lugar : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,private eventoService: EventoProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEventoPage');
  }

  /**
   * Método que inserta un evento en la base de datos
   * @param message, evento a insertar
   */
  crearEvento(){
		this.eventoService.addEvento(this.evento);
  }


}
