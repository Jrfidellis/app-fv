import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MenuCard } from './MenuCard';

export const AboutCard = () => {
    const { navigate } = useNavigation();

    return (<MenuCard 
        title='Sobre nós' 
        desc='Informações sobre o Fôlego de Vida e onde você pode nos encontrar!'
        color='#9B5DE5'
        onPress={() => {
            navigate('About')
        }}
    />)
}
