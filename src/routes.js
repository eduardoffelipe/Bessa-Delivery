import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default Routes
