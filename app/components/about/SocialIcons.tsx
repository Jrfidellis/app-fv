import React from 'react';
import styled from 'styled-components';
import { Linking } from 'react-native';

const SocialIcon = {
  Instagram: require('../../assets/social/Ig.png'),
  Facebook: require('../../assets/social/Fb.png'),
  Whatsapp: require('../../assets/social/Wa.png'),
}

const SocialUrl = { 
  Instagram: 'https://www.instagram.com/juventudefolegodavida/',
  Facebook: 'https://www.facebook.com/juventudefolegodavida/',
  Whatsapp: 'https://api.whatsapp.com/send?1=pt_br&phone=+555193387382',
}

export const SocialIcons = () => {

    return (
        <Social>
            <SocialText>
              Nossas redes sociais
            </SocialText>
            <Container>
                <Button onPress={() => { Linking.openURL(SocialUrl.Instagram) }}>
                    <Imagem source={SocialIcon.Instagram} />
                </Button>
                <Button onPress={() => { Linking.openURL(SocialUrl.Facebook) }}>
                    <Imagem source={SocialIcon.Facebook} />
                </Button>
                <Button onPress={() => { Linking.openURL(SocialUrl.Whatsapp) }}>
                    <Imagem source={SocialIcon.Whatsapp} />
                </Button>
            </Container>
        </Social>
        
    )
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

const Social = styled.View`
  padding-top: 220px;
`;

const SocialText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #333;
  text-align: center;
  padding-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
`;

const Imagem = styled.Image`
    width: 30px;
    height: 30px;
`;
