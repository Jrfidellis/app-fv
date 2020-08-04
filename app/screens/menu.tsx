import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'; 

import { Post } from '../components/post/Post';

const MenuScreen = () => {
  return (
    <Holder>
      <Text>Voce esta no Menu</Text>
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

export default MenuScreen;