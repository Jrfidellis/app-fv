import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native'; 
import { IEvento } from 'app/services/api';

import { Text, View } from 'react-native';
import { AgendaService } from '../services/AgendaService';
import { Loader, LoaderContainer } from '../components/Loader';
import { ErrorTryAgain } from '../components/Error';

const agendaService = new AgendaService();

export const AgendaScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [diasDeEvento, setDiasDeEvento] = useState<[string, IEvento[]][]>([]);

  const getAgendaItens = () => {
    agendaService.getEventosGroupByDay()
      .then((e) => {
        console.log(e);
        setDiasDeEvento(e);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getAgendaItens();
  }, []);

  if (loading) {
    return <LoaderContainer>
      <Loader/>
    </LoaderContainer>;
  }

  if (error) {
    return <LoaderContainer>
      <ErrorTryAgain callback={() => {
        setLoading(true);
        getAgendaItens();
      }}/>
    </LoaderContainer>;
  }

  return (
    <Container>
      <Text>Agenda</Text>
      {diasDeEvento.map(([dia, eventos]) => <>
        <Text>{dia}</Text>
        {eventos.map(e => <Text>{e.texto}</Text>)}
      </>)}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
`;