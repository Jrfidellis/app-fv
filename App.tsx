import React from 'react';
import styled from 'styled-components/native'; 

import { Routes } from './app/routes';
import { Post } from './app/components/post/Post';

const App = () => {
  return (
    <Holder>
      <Routes/>
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

export default App;

