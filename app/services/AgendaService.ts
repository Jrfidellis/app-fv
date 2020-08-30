import firestore from '@react-native-firebase/firestore';
import { IEvento } from './api';

export class AgendaService {

  private collection = firestore().collection('Evento');
  
  async getEventos() {
    const eventos: IEvento[] = [];

    const value = await this.collection
      .where('data', '>', Date())
      .get()

    value.forEach(snap => {
      eventos.push(snap.data() as IEvento);
    });

    return eventos;
  }

}