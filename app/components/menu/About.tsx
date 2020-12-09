import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MenuCard } from './MenuCard';

export const AboutCard = () => {
    const { navigate } = useNavigation();

    return (<MenuCard 
        title='Sobre nós' 
        desc='Informações sobre o Fôlego de Vida e onde você pode nos encontrar!'
        onPress={() => {
            navigate('About')
        }}
    />)
}
