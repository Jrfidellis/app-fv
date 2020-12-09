import firestore from '@react-native-firebase/firestore';
import { IEvento } from './api';

export class AgendaService {

  private collection = firestore().collection('Evento');
  
  async getEventos() {
    const eventos: IEvento[] = [];

    const value = await this.collection
      .where('data', '>', new Date())
      .get()

    value.forEach(snap => {
      eventos.push(snap.data() as IEvento);
    });

    return eventos;
  }

  async getEventosGroupByDay() {
    const grouped: { [key: string]: IEvento[] } = {};

    const eventos = await this.getEventos();

    const getKey = (e: IEvento) => {
      const date = e.data.toDate();
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    eventos
      .map(evento => ({ key: getKey(evento), evento }))
      .forEach(e => {
        if (!grouped[e.key]) {
          grouped[e.key] = [];
        } 
        
        grouped[e.key].push(e.evento);
      })

    return Object.entries(grouped);
  }

}