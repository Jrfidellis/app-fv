import React, { useEffect } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';

import { Routes } from './app/routes/routes';
import { theme, Theme } from './app/assets/styles/theme';

import { requestUserPermission } from './app/core/notificationsPermission';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();
  }, []);

  return (
    <NavigationContainer>
      <Theme>
        <SafeAreaView style={safeAreaStyle}>
          <Routes/>
        </SafeAreaView>
      </Theme>
    </NavigationContainer>
  );
};

const safeAreaStyle: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: theme.colors.theme
}