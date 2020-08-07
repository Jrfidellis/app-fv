import React, { useState, useEffect } from 'react';
//import { Autor } from '../autorPost/AutorJoao';
import { View, ActivityIndicator, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { PostCard, Line, Title, Image, Wrapper, Autor, Name, Likes, Separator } from './Post.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function Post() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [feed, setFeed] = useState([]); // Initial empty array of users
  
    useEffect(() => {
      const subscriber = firestore()
        .collection('Feed')
        .onSnapshot(querySnapshot => {
          
          const feed = [];
          querySnapshot.forEach(documentSnapshot => {
            feed.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
    
          setFeed(feed);
          setLoading(false);
        });
    
      return () => subscriber();
    }, []);
  
    if (loading) {
      return <ActivityIndicator />;
    }

  return( 
    <FlatList
      data={feed}
      renderItem={({ item }) => (
      <PostCard>
        <Line/>
        <Wrapper>
          <Title>{item.Titulo}</Title>
          <Autor>
            <Image style={{height:12, width:12, borderRadius: 12/2, marginRight:2}} source={require('./jackcha.jpg')}/>
            <Name>{item.Autor}</Name>
            <Separator>·</Separator>
            <Icon name='favorite' size={10} color='#333' />
            <Likes>{item.Likes}</Likes>
          </Autor>
        </Wrapper>
      </PostCard>
      )}
    />
    );
  }