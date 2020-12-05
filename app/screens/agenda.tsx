import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { IEvento } from 'app/services/api';

import { AgendaService } from '../services/AgendaService';
import { Loader, LoaderContainer } from '../components/Loader';
import { ErrorTryAgain } from '../components/Error';
import { DiaAgenda } from '../components/diaAgenda/DiaAgenda';

const agendaService = new AgendaService();

export const AgendaScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [diasDeEvento, setDiasDeEvento] = useState<[string, IEvento[]][]>([]);

  const getAgendaItens = () => {
    agendaService.getEventosGroupByDay()
      .then((e) => {
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

  if (diasDeEvento.length === 0) {
    return <LoaderContainer>
      <Texto>Nenhum evento na nossa agenda!</Texto>
    </LoaderContainer>;
  }

  return (
    <Container>
      {diasDeEvento.map(([dia, eventos]) => <DiaAgenda key={dia} dia={dia} eventos={eventos}>
      </DiaAgenda>)}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
`;

const Texto = styled.Text`
  color: ${s => s.theme.colors.theme};
  font-size: 16px;
`;