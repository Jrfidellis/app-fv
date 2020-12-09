import React from 'react';
import styled from 'styled-components/native';

import { Feed } from '../components/feed/Feed';

export const FeedScreen = () => {
  return (
    <Container>
      <Feed/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;