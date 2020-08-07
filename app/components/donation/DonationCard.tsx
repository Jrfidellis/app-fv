import React,{ useState, useEffect }from 'react';
import { Linking, FlatList, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Card, Desc, Title } from './Donation.styles';
import { OtherDonationCard } from './OtherDonation.styles'

export function DonateCards() {
    const [loading, setLoading] = useState(true);
    const [donation, setDonation] = useState([]);

    useEffect(() => {
      const donation = firestore()
        .collection('Donation')
        .onSnapshot(querySnapshot => {
          
          const donation = [];
          querySnapshot.forEach(documentSnapshot => {
            donation.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
    
          setDonation(donation);
          setLoading(false);
        });
    
      return () => donation();
    }, []);
  
    if (loading) {
      return <ActivityIndicator />;
    }

  return(
    <FlatList
      data={donation}
      renderItem={({ item }) => (
        <Card onPress={() => {Linking.openURL(item.Link)}}>
           <Title>Doar R${item.Valor}</Title>
            <Desc>{item.Desc}</Desc>
        </Card>
      )}
    />
    );
  }