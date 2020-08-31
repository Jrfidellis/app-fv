import React from 'react';

import { dateFormat } from '../../../core/date';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../../assets/styles/theme';

import { DotSeparator } from '../components/DotSeparator';
import { Wrapper, Texto, ImagemAutor } from './AutorPost.styles';
import { IFeed } from 'app/services/api';

// recebe nome, foto, likes e data
// exibe campos conforme props

interface AutorProps {
    feed: IFeed;
    showImage?: boolean;
    white?: boolean;
}

export const AutorPost: React.FC<AutorProps> = (props) => {
    const { 
        feed,
        white,
        showImage
    } = props;

    const color = white ? theme.colors.white : theme.colors.gray;
    const textStyle = { color };

    return (<Wrapper>
        {(feed.autor.foto && showImage)&& <ImagemAutor source={{ uri: feed.autor.foto }}/>}
        <Texto style={textStyle}>{feed.autor.nome}</Texto>
        <DotSeparator color={color}/>
        {feed.likes && <>
            <Texto style={textStyle}>{feed.likes} </Texto>
            <Icon name="favorite" size={12} color={color}/>
            <DotSeparator color={color}/>
        </>}
        {feed.data && <Texto style={textStyle}>{dateFormat(feed.data.toDate())}</Texto>}
    </Wrapper>);
}