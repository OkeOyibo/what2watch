import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, ImageBackground, View, Animated, Easing, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Index from './app/screens/Index';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Categories from './app/screens/Categories';

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
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'movie'
                  : 'movie';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'favorite' : 'favorite-border';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}          
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'tomato',
          }}          
        >
          <Tab.Screen
            name="Home"
            component={Index}
          />
          <Tab.Screen
            name="Favorites"
            component={Categories}
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

