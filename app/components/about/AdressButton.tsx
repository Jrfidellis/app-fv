import React from 'react';
import { Linking } from 'react-native';
import { Title, Card } from './AdressButton.styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const AdressButtonCard = () => {
    const localizacao = 'https://www.google.com/maps/dir//Uirapuru+-+R.+Jo%C3%A3o+Carlos+Haas+Sobrinho,+630+-+Feitoria,+S%C3%A3o+Leopoldo+-+RS,+93054-465/@-29.7612693,-51.1282675,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x95196b9c1094b5ed:0xa382a2972bd2a341!2m2!1d-51.0948358!2d-29.7581817!3e0';

    return (
        <Card 
            onPress={() => { Linking.openURL(localizacao) }} 
            style={{ backgroundColor: "#0F90FA" }}
        >
            <Title>Nosso endereço</Title>
            <Icon name="place" size={25} color="#FFF"/>
        </Card>
    )
}
