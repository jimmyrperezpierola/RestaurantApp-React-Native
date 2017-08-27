/*
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
// Navegador entre paginas
import { DrawerNavigator } from 'react-navigation';

// Vistas
import DescriptionScreen from './App/screens/descriptionScreen'
import HomeScreen from './App/screens/HomeScreen'


//  Navegador de la aplicacion
const RestaurantApp = DrawerNavigator({
  Home: {
    path:'/',
    screen: HomeScreen
  },
  Description:{
    path:'/description',
    screen: DescriptionScreen
  }

});



AppRegistry.registerComponent('RestaurantApp', () => RestaurantApp);
