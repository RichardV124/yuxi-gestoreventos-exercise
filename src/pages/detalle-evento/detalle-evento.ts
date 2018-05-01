import { InvitadoProvider } from './../../providers/invitado/invitado';
import { Evento } from './../../app/interfaces/evento.interface';
import { Invitado } from './../../app/interfaces/invitado.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DetalleEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-evento',
  templateUrl: 'detalle-evento.html',
})
export class DetalleEventoPage {

  
  evento:Evento;

  listaInvitados$: Invitado[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public invitadoServicio: InvitadoProvider) {
      this.evento = this.navParams.get('currentItem');
console.log(this.evento);

    this.invitadoServicio.getInvitados(this.evento.id).subscribe((content) => {

      this.listaInvitados$ = content;
    });
  }

  

  agregarInvitado() {
    let eventoId = this.evento.id;
        
    this.navCtrl.push('AgregarInvitadoPage', {eventoId: eventoId});
  }

}
