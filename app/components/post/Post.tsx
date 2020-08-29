import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList} from 'react-native';
import { IFeed } from '../../services/api';

import { PostCard, Line, Title, Wrapper } from './Post.styles';

import { FeedService } from '../../services/FeedService';
import { AutorPost } from '../autorPost/AutorPost';

const feedService = new FeedService();

export function Post() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [pagina, setPagina] = useState(1);

  const getFeedItens = (page: number) => {
    feedService
      .getFeed(page, 10)
      .then(novosItens => setFeed([...feed, ...novosItens]))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getFeedItens(pagina)
  }, [pagina]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Title>Deu pau</Title>;
  }

  return (
    <FlatList
      data={feed}
      keyExtractor={item => item.data.toString()}
      onScrollEndDrag={() => setPagina(pagina + 1)}
      renderItem={({ item }) => { return(
      <PostCard>
        <Line/>
        <Wrapper>
          <Title>{item.titulo}</Title>
          <AutorPost nome={item.autor} likes={item.likes} date={item.data.toDate()} />
        </Wrapper>
      </PostCard>
      )}}
    />
    );
  }