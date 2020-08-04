import React from 'react';
import styled from 'styled-components/native'; 

import { AboutCard as About } from '../components/menu/About'

export const AboutScreen = () => {
  return (
    <Container>
      <About/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;