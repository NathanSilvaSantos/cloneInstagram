import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Feed from './pages/Feed';
import Logo from './assets/instagram.png';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitle: <Image source={Logo} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            }
        },
    })
);

export default Routes;