import React from 'react';

import { Wrapper, Texto, Separator } from './AutorPost.styles';

// recebe nome, foto, likes e data
// exibe campos conforme props

interface AutorProps {
    nome: string;
    likes?: number;
    date?: string;
}

export const AutorPost: React.FC<AutorProps> = (props) => {
    const { nome, likes, date } = props;

    return (<Wrapper>
        <Texto>{nome}</Texto>
        <Separator/>
        {likes && <Texto> {likes} ♥️</Texto>}
        {date && <Texto> {date} </Texto>}
    </Wrapper>);
}