import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'; 

import { AboutCard as About } from '../components/menu/About';
import { DonateCard as Donate } from '../components/menu/Donate'

export const MenuScreen = () => {
  return (
    <Container>
      <Text>Voce esta no Menu</Text>
      <Donate/>
      <About/>
      <Text>Menu</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;