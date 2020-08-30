import firestore from '@react-native-firebase/firestore';
import { IFeed } from './api';

export class FeedService {

  private collection = firestore().collection('Feed');
  
  async getFeed(pagina: number, quantidadePorPagina: number) {
    const primeiroItem = (quantidadePorPagina * pagina) - quantidadePorPagina;
    const feed: IFeed[] = [];

    const value = await this.collection
      .orderBy('data')
      .startAt(primeiroItem)
      .limit(quantidadePorPagina)
      .get()

    const promises = value.docs.map(doc => {
      const data = doc.data()
      const autor: Promise<{ data(): { nome: string }}> = data.autor.get()

      return autor
      .then(s => s.data())
      .then(({ nome }) => {
        feed.push({
          ...data,
          id: doc.id,
          autor: nome
        } as IFeed);
      });
    })

    await Promise.all(promises);

    return feed;
  }

}