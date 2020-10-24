import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Download from '../Screens/Download';
import More from '../Screens/More';
import Privacy from '../Common/Privacy';
import Tarms from '../Common/Tearmsandcondition';
import Savedcard from '../Common/Savedcard';
import Account from '../Common/Account';

const RootStackNavigator = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();

export function Mainstack() {
return(
    <RootStackNavigator.Navigator
        initialRouteName="HomeTab"
    >
        <RootStackNavigator.Screen name='React Navigation' component={HomeTab} />
        <RootStackNavigator.Screen name='a' component={Stack} />
        <RootStackNavigator.Screen name='Privacy' component={Privacy} />
        <RootStackNavigator.Screen name='Tearms' component={Tarms} />
        <RootStackNavigator.Screen name='Saved card' component={Savedcard} />
        <RootStackNavigator.Screen name='Account' component={Account} />

    </RootStackNavigator.Navigator>
)}

export function Stack(){
    return(

        <RootStackNavigator.Navigator
        // initialRouteName="HomeTab"
    >
        {/* <RootStackNavigator.Screen name='React Navigation' component={Mainstack} /> */}
        <RootStackNavigator.Screen name='Home' component={Home} />
        <RootStackNavigator.Screen name='Search' component={Search} />
        <RootStackNavigator.Screen name='Download' component={Download} />
        <RootStackNavigator.Screen name='More' component={More} />

    </RootStackNavigator.Navigator>
    )
} 
export function HomeTab() {
return(



    <BottomNavigator.Navigator
    // style={{borderwidth:2}}
    initialRouteName='Home'
    >



        <RootStackNavigator.Screen name='Home' component={Home} />
        <RootStackNavigator.Screen name='Search' component={Search} />
        <RootStackNavigator.Screen name='Download' component={Download} />
        <RootStackNavigator.Screen name='More' component={More} />

    </BottomNavigator.Navigator>
)}