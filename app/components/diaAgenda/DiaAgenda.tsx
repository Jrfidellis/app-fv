import React from 'react';
import { IEvento } from 'app/services/api';
import { Eventos, Dia, Evento, DiaAgenda as Wrapper } from './DiaAgenda.styles';
import { timeFormat } from '../../core/date';

interface IDiaAgendaProps { dia: string, eventos: IEvento[] }

export const DiaAgenda: React.FC<IDiaAgendaProps> = ({ dia, eventos }) => <Wrapper>
    <Dia>{dia}</Dia>
    <Eventos>
        {eventos.map(evento => <Evento key={evento.texto}>
            {timeFormat(evento.data.toDate())} - {evento.texto}
        </Evento>)}
    </Eventos>
</Wrapper>