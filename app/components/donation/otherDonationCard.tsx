import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { OtherDonationCard } from './otherDonation.styles';

export const DonateCard = () => {
    const { navigate } = useNavigation();
    
    return (<OtherDonationCard
        title='Outras Doações' 
        color='#0BD55C'
        onPress={() => navigate('Donation')}
    />)
}