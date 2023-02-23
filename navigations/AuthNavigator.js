import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Tabs from './BottomTabNavigator';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Login}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
