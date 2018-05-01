
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Evento } from '../../app/interfaces/evento.interface';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  // Nombre de la coleccion
	nameCollection = 'eventos';

  constructor(private db: AngularFirestore) {
    console.log('Hello EventoProvider Provider');
  }

  /**
   * Método que inserta un Evento en la base de datos
   * @param evento, Evento a insertar
   */
	addEvento(evento: Evento) {
		const id = this.db.createId();
		this.db
			.collection(this.nameCollection)
			.doc(id)
			.set({ id: id, motivo: evento.motivo, lugar: evento.lugar });
  }

  /**
   * Método que lista todos los Evento de la base de datos.
   */
	getEventos(): Observable<Evento[]> {
		return this.db.collection<Evento>(this.nameCollection).valueChanges();
	}

}
