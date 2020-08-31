
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { theme } from '../assets/styles/theme';

export const Loader: React.FC = () => {
    return <ActivityIndicator size="large" color={theme.colors.theme}/>
};