import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'; 

export const AgendaScreen = () => {
  return (
    <Container>
      <Text>Voce esta na Agenda</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;