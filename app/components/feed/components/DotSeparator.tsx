import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DotSeparator: React.FC<{ color: string }> = ({ color }) => 
    <IconStyled name="fiber-manual-record" size={5} color={color}/>

const IconStyled = styled(Icon)`
    margin-left: 5px;
    margin-right: 5px;
`;