import firestore from '@react-native-firebase/firestore';

export class FeedService {

  private collection = firestore().collection('Feed');
  
  async getFeed(pagina: number, quantidadePorPagina: number) {
    const primeiroItem = (quantidadePorPagina * pagina) - quantidadePorPagina;
    const feed: IFeed[] = [];

    const value = await this.collection
      .startAt(primeiroItem)
      .limit(quantidadePorPagina)
      .get()

    value.forEach(snap => {
      feed.push(snap.data() as IFeed);
    });

    return feed;
  }

}