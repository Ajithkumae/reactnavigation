import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';

const RootStackNavigator = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();
export function Mainstack() {
return(
    <RootStackNavigator.Navigator
        initialRouteName="HomeTab"
    >
        <RootStackNavigator.Screen name='hometab' component={HomeTab} />
        <RootStackNavigator.Screen name='Home' component={Home} />
        <RootStackNavigator.Screen namr='dashboard' component={Dashboard} />
    </RootStackNavigator.Navigator>
)}
export function HomeTab() {
return(
    <BottomNavigator.Navigator>
        <RootStackNavigator.Screen name='Home' component={Home} />
        <RootStackNavigator.Screen namr='dashboard' component={Dashboard} />
    </BottomNavigator.Navigator>
)}