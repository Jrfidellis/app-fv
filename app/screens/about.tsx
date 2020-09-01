import React from 'react';
import styled from 'styled-components/native'; 
import { SocialIcons } from '../components/about/SocialIcons';
import { AdressButtonCard } from '../components/about/AdressButton';

export const AboutScreen = () => {
  return (
    <Container>
      <Texto>
        {'\t'} A Juventude Folêgo da Vida tem como objetivo manifestar o Reino 
        dos céus na terra com nossas ações, seguindo o exemplo de Cristo.
      </Texto>
      <Texto>
        {'\t'} Estamos situados na Igreja Assembléia de 
        Deus do Vale do Rio dos Sinos (Distrito 4, Uirapuru).
      </Texto>
      <AdressButtonCard/>
      <SocialIcons/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Texto = styled.Text`
  color: ${props => props.theme.colors.black};
  padding-bottom: 20px;
  font-size: 16px;
`;

