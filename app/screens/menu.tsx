import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'; 

export const MenuScreen = () => {
  return (
    <Container>
      <Text>Menu</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;
