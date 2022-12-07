import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../Pages/Login";
import { RegisterBox } from "../Components/RegisterBox";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={RegisterBox} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
