import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FeedScreen } from './screens/feed';
import { AgendaScreen } from './screens/agenda';
import { MenuScreen } from './screens/menu';

const Tab = createMaterialTopTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed"
    >
      <Tab.Screen name="Menu"  
        component={MenuScreen} />
      <Tab.Screen name="Feed" 
        component={FeedScreen} />
      <Tab.Screen name="Agenda"  
        component={AgendaScreen} />
    </Tab.Navigator>
  );
}