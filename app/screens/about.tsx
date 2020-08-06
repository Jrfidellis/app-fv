import React from 'react';
import styled from 'styled-components/native'; 

import { AdressButtonCard } from '../components/about/adressButton'

export const AboutScreen = () => {
  return (
    <Container>
      <Texto>
        A Juventude Folêgo da Vida tem como objetivo manifestar o Reino 
        dos céus na terra com nossas ações, seguindo o exemplo de Cristo.
      </Texto>
      <Texto>
        Estamos situados na Igreja Assembléia de 
        Deus do Vale do Rio dos Sinos (Distrito 4, Uirapuru).
      </Texto>
      <AdressButtonCard/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Texto = styled.Text`
  color: #333;
  padding-bottom: 20px;
`;