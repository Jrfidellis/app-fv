import React from 'react';

import { Wrapper, Image, Text } from './AutorPost.styles';

// recebe nome, foto, likes e data
// exibe campos conforme props

interface AutorProps {
    nome: string;
    url: string;
    likes?: number;
    date?: string;
}

export const Autor: React.FC<AutorProps> = (props) => {
    const { url, nome, likes, date } = props;

    return (<Wrapper>
        {url && <Image source={url} />}
        {nome && <Text>{nome}</Text>}
        {likes && <Text> · {likes} ♥️</Text>}
        {date && <Text> {date}</Text>}
    </Wrapper>);
}