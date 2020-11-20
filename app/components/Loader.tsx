
import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import { theme } from '../assets/styles/theme';

export const Loader: React.FC = () => {
    return <ActivityIndicator size="large" color={theme.colors.theme}/>
};

export const LoaderContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;