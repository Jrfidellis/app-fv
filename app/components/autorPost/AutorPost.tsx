import React from 'react';
import { dateFormat } from '../../core/date';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Texto, Separator } from './AutorPost.styles';

// recebe nome, foto, likes e data
// exibe campos conforme props

interface AutorProps {
    nome: string;
    likes?: number;
    date?: Date;
}

export const AutorPost: React.FC<AutorProps> = (props) => {
    const { nome, likes, date } = props;

    return (<Wrapper>
        <Texto>{nome}</Texto>
        <Separator/>
        {likes && <Texto> {likes} </Texto>}
        {likes && <Icon name="favorite" size={15} color="#333"/>}
        {likes && <Separator/>}
        {date && <Texto> {dateFormat(date)} </Texto>}
    </Wrapper>);
}