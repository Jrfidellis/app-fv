import React from 'react';
import styled from 'styled-components/native';

import { Post } from '../components/post/Post';

export const FeedScreen = () => {
  return (
    <Container>
      <Post/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;