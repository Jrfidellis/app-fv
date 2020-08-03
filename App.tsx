import React from 'react';
import styled from 'styled-components/native'; 
import { Post } from './app/components/post/Post';

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

const App = () => {
  return (
    <Holder>
      <Texto>Teste</Texto>
      <Post/>
    </Holder>
  );
};

export default App;