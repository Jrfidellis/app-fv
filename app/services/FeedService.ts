import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IFeed, IPost, IUsuario } from './api';

export class FeedService {

  private db = firestore()
  private collection = this.db.collection('Feed');
  
  async getFeed(pagina: number, quantidadePorPagina: number) {
    const primeiroItem = (quantidadePorPagina * pagina) - quantidadePorPagina;
    const feedItens: IFeed[] = [];

    const value = await this.collection
      .orderBy('data')
      .startAt(primeiroItem)
      .limit(quantidadePorPagina)
      .get()

    const promises = value.docs.map(doc => {
      const feed = doc.data()
      const autor: Promise<{ data(): IUsuario}> = feed.autor.get()

      return autor
      .then(s => s.data())
      .then((autor) => {
        feedItens.push({
          id: doc.id,
          autor: autor,
          data: feed.data,
          likes: feed.likes,
          postPath: feed.texto.path,
          titulo: feed.titulo
        });
      }).catch(e => console.log(e));
    })

    await Promise.all(promises);

    return feedItens;
  }

  async getPostFromPath(path:  string): Promise<IPost> {
    const postRef = await this.db.doc(path).get();
    return postRef.data() as IPost;
  }

}