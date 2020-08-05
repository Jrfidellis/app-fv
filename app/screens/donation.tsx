import React from 'react';
import styled from 'styled-components/native';
import { DonateCard as Donate } from '../components/donation/donationCard'

export const DonationScreen = () => {
  return (
    <Container>
      <Texto>
        As doações ajudam a família FV a manter os trabalhos de ação social, 
        adquirir equipamentos e decorações para nossas celebrações.
      </Texto>
      <Donate/>
    </Container>
  );
};

const Texto = styled.Text`
  color: #333;
  padding-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;