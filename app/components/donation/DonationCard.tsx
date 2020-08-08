import React,{ useState, useEffect }from 'react';
import { Linking, FlatList, ActivityIndicator } from 'react-native';

import { Card, Desc, Title } from './Donation.styles';
import { DoacaoService } from 'app/services/DoacaoService';

const doacaoService = new DoacaoService();

export function DonateCards() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [doacoes, setDoacoes] = useState<IDonation[]>([]);

    useEffect(() => {
      doacaoService.getTiposDoacao()
        .then(doacoes => setDoacoes(doacoes))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }, []);
  
    if (loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Title>Deu pau</Title>;
    }

    return(
        <FlatList
        data={doacoes}
        renderItem={({ item }) => (
            <Card onPress={() => {Linking.openURL(item.link)}}>
                <Title>Doar R${item.valor}</Title>
                <Desc>{item.descricao}</Desc>
            </Card>
        )}
        />
    );
  }