
import React from 'react';
import styled from 'styled-components/native';

interface IProgressBarProps {
    progress: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
    return <>
        <Bar/>
        <Progress style={{ width: `${progress*100}%` }} />
    </>
};

const Bar = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.white};
`;

const Progress = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.theme};
`;