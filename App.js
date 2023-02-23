import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import 'react-native-gesture-handler';
const App = () => {

  return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
  );
};

export default App;
