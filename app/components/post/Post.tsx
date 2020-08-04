import React from 'react';
import { Autor } from '../autorPost/AutorPost';

import { PostCard, Line, Title, Image, Wrapper } from './Post.styles';

export const Post = () => <PostCard>
    <Line/>
    <Wrapper>
        <Title>
            A vida de Salomão, o rei de Israel
        </Title>
        <Autor nome="João Fidellis" url="a" likes={2}/>
    </Wrapper>
    <Image source=""/>
</PostCard>