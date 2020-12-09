import React from 'react';

import styled from 'styled-components/native'; 

import { AboutCard } from '../components/menu/About';
import { DonateCard } from '../components/menu/Donate'


export const MenuScreen = () => {
  return (
    <Container>
      <DonateCard/>
      <AboutCard/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;