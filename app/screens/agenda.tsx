import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'; 

import { Post } from '../components/post/Post';

const AgendaScreen = () => {
  return (
    <Holder>
      <Text>Voce esta na Agenda</Text>
      <Post/>
    </Holder>
  );
};

const Texto = styled.Text`
  color: red;
  position: absolute;
  top: 80px;
  left: 20px;
  font-size: 16px;
`

const Holder = styled.View`
  background: #efefef;
  width: 100%;
  height: 100%;
  padding: 100px 20px;
`;

export default AgendaScreen;