import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList} from 'react-native';
import { IFeed } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { PostCard, Line, Title, Wrapper } from './Feed.styles';

import { FeedService } from '../../services/FeedService';
import { AutorPost } from '../autorPost/AutorPost';

const feedService = new FeedService();

export function Feed() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [pagina, setPagina] = useState(1);
  const { navigate } = useNavigation();

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
      keyExtractor={item => item.id}
      onScrollEndDrag={() => setPagina(pagina + 1)}
      renderItem={({ item }) => { return(
      <PostCard
        onPress={() => navigate('')}
      >
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