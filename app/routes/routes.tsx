import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { FeedScreen } from '../screens/feed';
import { AgendaScreen } from '../screens/agenda';
import { MenuScreen } from '../screens/menu';
import { DonationScreen } from '../screens/donation';
import { AboutScreen } from '../screens/about';

import { tapBarOptions, stackOptions } from './routes.styles';

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
  <RootStack.Screen key="Donation" name="Donation" component={DonationScreen} />,
  <RootStack.Screen key="About" name="About" component={AboutScreen} />
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