import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Evento } from '../../app/interfaces/evento.interface';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaEventos: Observable<Evento[]>;

  constructor(public navCtrl: NavController,private eventoServicio: EventoProvider ){
    this.listaEventos=eventoServicio.getEventos();

  }

  goToDetalleEvento(item):void{
    this.navCtrl.push('DetalleEventoPage',{currentItem: item})
  }


  goToCrearEvento(){
    this.navCtrl.push('CrearEventoPage');
  }
}