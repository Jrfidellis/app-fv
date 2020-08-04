import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { Routes } from './app/routes';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0F90FA' }}>
          <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

