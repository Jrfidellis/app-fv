import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { Post } from '../components/post/Post';

const FeedScreen = () => {
  return (
    <Holder>
      <Text>Voce esta no Feed</Text>
      <Post/>
    </Holder>
  );
};

const Holder = styled.View`
  background: #efefef;
  width: 100%;
  height: 100%;
  padding: 100px 20px;
`;

export default FeedScreen;