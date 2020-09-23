import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';
import Logo from './assets/instagram.png';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{
            headerLayoutPreset: 'center',
            headerTitle: <Image source={Logo} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            },
            }}>
            <AppStack.Screen name="Feed" component={Feed} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
}
