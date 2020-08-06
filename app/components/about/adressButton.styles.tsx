import React from 'react'
import styled from 'styled-components/native';

import { TouchableOpacityProps } from 'react-native';

interface AdressButtonProps extends TouchableOpacityProps {
    color: string;
    title: string;
}

export const AdressButton: React.FC<AdressButtonProps> = (props) => {
    return (<Card onPress={props.onPress} style={{ backgroundColor: props.color }}>
        <Title>{props.title}</Title>
    </Card>)
}

export const Card = styled.TouchableOpacity`
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.colors.black};
    width: 100%;
    padding: 5px 5px 10px 20px;
    elevation: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-weight: bold;
`;