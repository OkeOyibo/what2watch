import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

import Index from './app/screens/Index';
import Favorites from './app/screens/Favorites';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
        <Tab.Navigator
          tabBarPosition='bottom'
          initialRouteName="Index"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Discover') {
                iconName = focused
                  ? 'movie'
                  : 'movie';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'favorite' : 'favorite-border';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })} 
          activeColor="red"
          inactiveColor="white"
          barStyle={{ backgroundColor: "black" }}         
          tabBarOptions={{
            safeAreaInsets: 'top'
          }}          
        >
          <Tab.Screen
            name="Discover"
            component={Index}
          />
          <Tab.Screen
            name="Favorites"
            component={Favorites}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'red'
  },
});
export default App

