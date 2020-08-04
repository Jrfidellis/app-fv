import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';

import { FeedScreen } from './screens/feed';
import { AgendaScreen } from './screens/agenda';
import { MenuScreen } from './screens/menu';

const Tab = createMaterialTopTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed"
      tabBarOptions={tapBarOptions}
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

const tapBarOptions: MaterialTopTabBarOptions = {
  indicatorStyle: { backgroundColor: '#0F90FA', height: '10%' }, // Estilo barra de indicação
  labelStyle: { fontSize: 16, fontWeight: 'bold', textTransform: 'none' },
  activeTintColor: '#0F90FA',
  inactiveTintColor: '#FFF',
  style: { backgroundColor: '#333' } // Estilo Tab
};