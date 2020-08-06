import React from 'react';
import styled from 'styled-components/native';

import { DonateCards } from '../components/donation/DonationCard'

export const DonationScreen = () => {
  return (
    <Container>
      <Texto>
        {'\t'} As doações ajudam a família FV a manter os trabalhos de ação social, 
        adquirir equipamentos e decorações para nossas celebrações.
      </Texto>
      <DonateCards/>
    </Container>
  );
};

const Texto = styled.Text`
  color: #333;
  padding-bottom: 20px;
  font-size: 16px;
`;

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;