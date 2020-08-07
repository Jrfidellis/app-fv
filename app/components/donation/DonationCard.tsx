import React from 'react';

import { Linking } from 'react-native'
import { DonationCard } from './Donation.styles';
import { OtherDonationCard } from './OtherDonation.styles'


export const DonateCards = () => {
    return (<>
    <DonationCard
        title='Doar R$10,00' 
        desc='“viuva sem nada..” 🥉'
        color='#0BD55C'
        onPress={() => {Linking.openURL('http://mpago.la/2ctDWqi')}}
    />
    <DonationCard
        title='Doar R$20,00' 
        desc='Judas, é você? 🥈'
        color='#0BD55C'
        onPress={() => {Linking.openURL('http://mpago.la/2y8W8u8')}}
    />
    <DonationCard
        title='Doar R$80,00' 
        desc='nem Salomão 🥇'
        color='#0BD55C'
        onPress={() => {Linking.openURL('http://mpago.la/1xqRy62')}}
    />
    <OtherDonationCard
        title='Outras Doações'
        color='#0F90FA'
        onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=555191843272')}}
    />
    <DonationCard
        title='Pagar um café' 
        desc='apoiar o time de desenvolvedores '
        color='#0BD55C'
        onPress={() => {Linking.openURL('http://mpago.la/2ktqebr')}}
    />
    </>
    )
}
