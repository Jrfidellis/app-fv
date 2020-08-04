import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from './assets/styles/theme';

import { FeedScreen } from './screens/feed';
import { AgendaScreen } from './screens/agenda';
import { MenuScreen } from './screens/menu';
import { DonationScreen } from './screens/donation';
import { AboutScreen } from './screens/about';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed"
      tabBarOptions={tapBarOptions}>

      <Tab.Screen  name="Menu"  
        component={MenuScreen} />
      <Tab.Screen name="Feed" 
        component={FeedScreen} />
      <Tab.Screen name="Agenda"  
        component={AgendaScreen} />
    </Tab.Navigator>
  );
}

function Feed() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
  );
}
const tapBarOptions: MaterialTopTabBarOptions = {
  indicatorStyle: { backgroundColor: theme.colors.theme, height: '10%' }, // Estilo barra de indicação
  labelStyle: { fontSize: 16, fontWeight: 'bold', textTransform: 'none' },
  activeTintColor: theme.colors.theme,
  inactiveTintColor: theme.colors.white,
  style: { backgroundColor: theme.colors.black } // Estilo Tab
};