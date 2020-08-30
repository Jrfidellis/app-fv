import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import { FeedScreen } from '../screens/feed';
import { AgendaScreen } from '../screens/agenda';
import { MenuScreen } from '../screens/menu';
import { DonationScreen } from '../screens/donation';
import { AboutScreen } from '../screens/about';

import { tapBarOptions, stackOptions, headerName } from './routes.styles';

const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function Routes() {
  return (<RootStack.Navigator screenOptions={stackOptions}>
    <RootStack.Screen
      name="Main"
      component={MainRoute}
      options={{ headerShown: false }}
    />
    {nestedRoutes}
  </RootStack.Navigator>);
}

const nestedRoutes = [
  <RootStack.Screen key="Donation" options={headerName('Doações')} name="Donation" component={DonationScreen} />,
  <RootStack.Screen key="About" options={headerName('Sobre nós')} name="About" component={AboutScreen} />,
  <RootStack.Screen key="Post" options={headerName('Postagem')} name="Post" component={} />
];

const MainRoute = () => (
  <Tab.Navigator 
    initialRouteName="Feed"
    tabBarOptions={tapBarOptions}
  >
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Agenda" component={AgendaScreen} />
  </Tab.Navigator>
);
