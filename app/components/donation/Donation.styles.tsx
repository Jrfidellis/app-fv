import React from 'react'
import styled from 'styled-components/native';

import { TouchableOpacityProps } from 'react-native';

/**interface DonationCardProps extends TouchableOpacityProps {
    color: string;
    title: string;
    desc: string;
}

export const DonationCard: React.FC<DonationCardProps> = (props) => {
    return (<Card onPress={props.onPress} style={{ backgroundColor: props.color }}>
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
    </Card>)
}**/

export const Card = styled.TouchableOpacity`
    height: 70px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: #0BD55C;
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
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Desc = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: normal;
`;