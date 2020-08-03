import React from 'react';
import styled from 'styled-components/native'; 

const Texto = styled.Text`
  color: red;
  position: absolute;
  top: 80px;
  left: 20px;
  font-size: 22px;
`

const App = () => {
  return (
    <>
      <Texto>Teste</Texto>
    </>
  );
};

export default App;