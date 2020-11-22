import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native'; 
import { IEvento } from 'app/services/api';

import { Text, View } from 'react-native';
import { AgendaService } from '../services/AgendaService';
import { Loader, LoaderContainer } from '../components/Loader';
import { ErrorTryAgain } from '../components/Error';
import { Alt, Altrev, Container, Dia, Evento, Linha } from '../components/diaAgenda/DiaAgenda.styles'
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

  return (
    <Container>
      {diasDeEvento.map(([dia, eventos]) => <>
        <Dia>{dia}</Dia>
        <Alt>
          <Linha/><Altrev>{eventos.map(e => <Evento>{e.texto}</Evento>)}</Altrev>
        </Alt>
      </>)}
    </Container>
  );
};

