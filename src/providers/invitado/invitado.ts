import { Evento } from './../../app/interfaces/evento.interface';
import { Observable } from 'rxjs/Observable';
import { Invitado } from './../../app/interfaces/invitado.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable()
export class InvitadoProvider {

// Nombre de la coleccion
eventosCollectionName = 'eventos';
  invitadosCollectionName = 'invitados';

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    console.log('Hello InvitadoProvider Provider');
  }

   /**
   * Método empleado para subir una imagen al storage y posteriormente almacenar un invitado.
   * @param eventoId, id del evento al que se agregará el invitado.
   * @param guest Datos del invitado a almacenar.
   */
  addInvitado(eventoId: string, invitado: Invitado): Promise<any> {

    return this.storage.ref(`eventos/${eventoId}/profile/${invitado.nombre}`).putString(invitado.foto, 'base64', { contentType: 'image/png' }).then(
      (data) => {

        const url = data.metadata.downloadURLs[0];

        return this.agregarInvitadoAlEvento(eventoId, invitado, url);
      }, (error) => {
        console.log(error);
      });
  }

 
  /**
   * Método que lista los invitados de un evento.
   * @param eventoId Id del evento al que se le obtendrán los invitados.
   */
  getInvitados(eventoId): Observable<Invitado[]> {
    return this.db.collection<Evento>(this.eventosCollectionName).doc(eventoId).
    collection<Invitado>(this.invitadosCollectionName).valueChanges();
  }

  /**
   * Metodo que añade un invitado a un evento.
   * @param eventId Id del evento al que se le agregará el invitado.
   * @param guest Datos del invitado a almacenar.
   * @param foto, contiene la url de la foto del invitado.
   */
  agregarInvitadoAlEvento(eventId: string, invitado: Invitado, foto: string): Promise<any> {
    const id = this.db.createId();
    return this.db.collection(this.eventosCollectionName).doc(eventId).
    collection(this.invitadosCollectionName).add({
      id, name: invitado.nombre, foto: foto
    });
  }

}
