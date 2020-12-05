import styled from 'styled-components/native';

export const DiaAgenda = styled.View`
    margin-bottom: 10px;
`;

export const Dia = styled.Text`
    color: ${s => s.theme.colors.theme};
    font-size: 18px;
    font-weight: bold;
`;

export const Evento = styled.Text`
    color: ${s => s.theme.colors.black};
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
`;

export const Eventos = styled.View`
    flex-direction: column;
    margin-top: 3px;
    margin-bottom: 10px;
    border-left-width: 2px;
    border-left-color: ${s => s.theme.colors.theme};
`;
