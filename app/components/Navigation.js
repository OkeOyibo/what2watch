import React from 'react';
import Selection from '../screens/Selection';
import Index from '../screens/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation(props) {
    return (
        <Stack.Navigator initialRouteName={"Index"} mode={"modal"} headerMode={"none"} >
            <Stack.Screen name={'Index'} component={Index} />
            <Stack.Screen name={'Selection'} component={Selection} />
        </Stack.Navigator>
    );
}
export default Navigation;