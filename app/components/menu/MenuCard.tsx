import React from 'react'
import styled from 'styled-components/native';

interface MenuCardProps {
    color: string;
    title: string;
    desc: string;
}

export const MenuCard: React.FC<MenuCardProps> = (props) => 
    <Card style={{ backgroundColor: props.color }}>
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
    </Card>

const Card = styled.View`
    height: 80px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.colors.black};
    width: 100%;
    padding: 5px 5px 10px 20px;
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

export const Desc = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    font-weight: normal;
`;