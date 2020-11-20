import React,{ useState, useEffect }from 'react';
import { Linking, FlatList } from 'react-native';

import { Card, Desc, Title } from './Donation.styles';
import { DoacaoService } from '../../services/DoacaoService';
import { IDonation } from '../../services/api';
import { Loader, LoaderContainer } from '../Loader';
import { ErrorTryAgain } from '../Error';

const doacaoService = new DoacaoService();

export function DonateCards() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [doacoes, setDoacoes] = useState<IDonation[]>([]);

    const getTiposDoacao = () => doacaoService.getTiposDoacao()
      .then(doacoes => {
        setDoacoes(doacoes);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    useEffect(() => {
      getTiposDoacao();
    }, []);
  
    if (loading) {
      return <LoaderContainer>
        <Loader/>
      </LoaderContainer>;
    }

    if (error) {
      return <LoaderContainer>
        <ErrorTryAgain callback={() => {
          setLoading(true);
          getTiposDoacao();
        }}/>
      </LoaderContainer>;
    }

    return(
      <FlatList
      data={doacoes}
      keyExtractor={item => item.link}
      renderItem={({ item }) => (
          <Card onPress={() => {Linking.openURL(item.link)}}>
              <Title>Doar R$ {item.valor}</Title>
              <Desc>{item.descricao}</Desc>
          </Card>
      )}
      />
    );
  }