import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register";
import OpenAndCloseStores from "./pages/OpenAndCloseStores";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OpenAndCloseStores" component={OpenAndCloseStores} />
    </Stack.Navigator>
  );
};
export default Routes;
