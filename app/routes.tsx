import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FeedScreen } from './screens/feed';
import { AgendaScreen } from './screens/agenda';
import { MenuScreen } from './screens/menu';

const Tab = createMaterialTopTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName="Feed" //Rota incial
      tabBarOptions={{
        indicatorStyle: { backgroundColor: '#0F90FA' }, //Estilo barra de indicação
        labelStyle: { fontSize: 18, fontWeight: 'bold', color: '#fff', textTransform: 'none' }, //Estilo Fonte
        style: {backgroundColor: '#333'} //Estilo Tabbar
      }}
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