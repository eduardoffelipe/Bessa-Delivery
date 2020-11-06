import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Screen/Login'


const AppStack = createStackNavigator();

const Routes = () => {
  <NavigationContainer>
    <AppStack.Navigator initialRouteName="Login">
      <AppStack.Screen name="Login" component={Login} />
    </AppStack.Navigator>
  </NavigationContainer>
}

export default Routes;
