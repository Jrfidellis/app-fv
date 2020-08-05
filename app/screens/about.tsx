import React from 'react';
import styled from 'styled-components/native'; 

import { AdressButtonCard } from '../components/about/adressButton'

export const AboutScreen = () => {
  return (
    <Container>
      <AdressButtonCard/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;