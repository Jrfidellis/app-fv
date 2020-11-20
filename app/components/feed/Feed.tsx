import React, { useState, useEffect } from 'react';
import { FlatList, View} from 'react-native';
import { IFeed } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { PostCard, Line, Title, Wrapper, Thumbnail } from './Feed.styles';

import { FeedService } from '../../services/FeedService';
import { AutorPost } from './autorPost/AutorPost';
import { Loader, LoaderContainer } from '../Loader';
import { ErrorTryAgain } from '../Error';

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
      .then(novosItens => { 
        setFeed([...feed, ...novosItens]);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getFeedItens(pagina);
  }, [pagina]);

  if (loading) {
    return <LoaderContainer>
      <Loader/>
    </LoaderContainer>;
  }

  if (error) {
    return <LoaderContainer>
      <ErrorTryAgain callback={() => {
        setLoading(true);
        getFeedItens(pagina);
      }}/>
    </LoaderContainer>;
  }

  return (
    <FlatList
      data={feed}
      keyExtractor={item => item.id}
      onScrollEndDrag={() => setPagina(pagina + 1)}
      renderItem={({ item: feed }) => (
      <PostCard
        onPress={() => navigate('Post', { feed })}
      >
        <Line/>
        <Wrapper>
          <Title>{feed.titulo}</Title>
          <AutorPost feed={feed} />
        </Wrapper>
        <View>
          <Thumbnail source={{ uri: feed.thumbnail }} />
        </View>
      </PostCard>
      )}
    />
    );
  }