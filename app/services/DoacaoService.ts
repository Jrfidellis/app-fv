import firestore from '@react-native-firebase/firestore';
import { IDonation } from './api';

export class DoacaoService {

  private collection = firestore().collection('Doacao');
  
  async getTiposDoacao() {
    const doacoes: IDonation[] = [];

    const value = await this.collection
      .orderBy('valor')
      .get()

    value.forEach(snap => {
      doacoes.push(snap.data() as IDonation);
    });

    return doacoes;
  }

}