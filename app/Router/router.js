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

function getTabBarVisible(route) {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Home';

    if (routeName === 'Home') {
        return true;
    }
    return false;
}

export function Mainstack({ navigation, route }) {

    
    return (
        <RootStackNavigator.Navigator
            initialRouteName="HomeTab"
        // screenOptions={{
        //     headerShown: false
        // }}

        >
            <RootStackNavigator.Screen name='React navigation' component={HomeTab} />
            <RootStackNavigator.Screen name='Privacy' component={Privacy} />
            <RootStackNavigator.Screen name='Tearms' component={Tarms} />
            <RootStackNavigator.Screen name='Saved card' component={Savedcard} />
            <RootStackNavigator.Screen name='Account' component={Account} />
            <RootStackNavigator.Screen name='Download' component={Download} />
            <RootStackNavigator.Screen name='More' component={More} />

        </RootStackNavigator.Navigator>
    )
}

export function HomeTab({ navigation, route }) {
  
    debugger
    console.log(route);
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })

    }              

    return (
        <BottomNavigator.Navigator
            initialRouteName='Home'
        >   
            <RootStackNavigator.Screen name='Home' component={Home} 
            //options={({ route }) => ({
            //     tabBarVisible: getTabBarVisible(route)
            // })}
            />
            <RootStackNavigator.Screen name='Search' component={Search}
            />
            <RootStackNavigator.Screen name='Download' component={Download}
            />
            <RootStackNavigator.Screen name='More' component={More}
            />

        </BottomNavigator.Navigator>
    )
}