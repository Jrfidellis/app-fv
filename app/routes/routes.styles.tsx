import { MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';

import { theme } from '../assets/styles/theme';

export const tapBarOptions: MaterialTopTabBarOptions = {
    indicatorStyle: { backgroundColor: theme.colors.theme, height: '10%' }, // Estilo barra de indicação
    labelStyle: { fontSize: 16, fontWeight: 'bold', textTransform: 'none' },
    activeTintColor: theme.colors.theme,
    inactiveTintColor: theme.colors.white,
    style: { backgroundColor: theme.colors.black } // Estilo Tab
};

export const stackOptions: StackNavigationOptions = {
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {backgroundColor: theme.colors.black},
    headerTintColor: theme.colors.white,
};

export const headerName = (withName: string): StackNavigationOptions => ({
    headerTitle: withName
});