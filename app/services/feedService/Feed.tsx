import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export function FeedService() {
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
}