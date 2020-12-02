import React, { useEffect, useState } from 'react';

import { IEvento } from 'app/services/api';

import { AgendaService } from '../services/AgendaService';
import { Loader, LoaderContainer } from '../components/Loader';
import { ErrorTryAgain } from '../components/Error';
import { Eventos, Container, Dia, Evento } from '../components/diaAgenda/Agenda.styles'

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
        <Eventos>
          {eventos.map(e => <Evento>{e.texto}</Evento>)}
        </Eventos>
      </>)}
    </Container>
  );
};

