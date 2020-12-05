import React, { useEffect, useState } from 'react';
import { StyleProp, ViewStyle, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import styled from 'styled-components/native';

import { IFeed, IPost } from '../services/api';
import { FeedService } from '../services/FeedService';

import { Loader } from '../components/Loader';
import { AutorPost } from '../components/feed/autorPost/AutorPost';
import { ProgressBar } from '../components/ProgessBar';

const feedService = new FeedService();

export const PostScreen: React.FC<{ route: RouteProp<any, string> }> = (props) => {
  const [post, setPost] = useState<IPost>();
  const [readPercentage, setReadPercentage] = useState<number>(0);

  const feed: IFeed = props.route.params?.feed;

  useEffect(() => {
    feedService
      .getPostFromPath(feed.postPath)
      .then(setPost);
  }, []);

  if (!post) {
    return <Container style={styleCenter}>
      <Loader/>
    </Container>
  }

  return (
    <Container>
      <ScrollView 
        scrollEventThrottle={5}
        onScroll={e => {
          const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          const scrollViewSize = layoutMeasurement.height;
          const contentSizeHeight = contentSize.height;
          const currentLocationPercentage = contentOffset.y / (contentSizeHeight - scrollViewSize);

          if (currentLocationPercentage > readPercentage) {
            setReadPercentage(currentLocationPercentage);
          }
        }}
        style={{ padding: 20 }}
      >
        <Titulo>
          {feed.titulo}
        </Titulo>
        <AutorPost white={true} feed={feed} showImage={true} />
        <Texto>
          {post.texto
            .replace(/\\n/g, '\n\n')
            .replace(/\\t/g, '\t')  
          }
        </Texto>
      </ScrollView>
      <ProgressBar progress={readPercentage}/>
    </Container>
  );
};

const styleCenter: StyleProp<ViewStyle> = { alignItems: 'center', justifyContent: 'center' };

const Container = styled.View`
  flex: 1;
  position: relative;
  background: ${props => props.theme.colors.black};
`;

const Titulo = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
`;

const Texto = styled.Text`
  color: ${props => props.theme.colors.white};
  padding-bottom: 70px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  margin-top: 20px;
`;