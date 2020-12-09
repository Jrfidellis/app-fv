import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MenuCard } from './MenuCard';

export const DonateCard = () => {
    const { navigate } = useNavigation();
    
    return (<MenuCard
        title='Doar para o Fôlego da Vida' 
        desc='Doe para suportar os trabalhos do Fôlego de Vida!'
        onPress={() => navigate('Donation')}
    />)
}