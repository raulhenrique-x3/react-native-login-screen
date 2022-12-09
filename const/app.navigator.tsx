import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../Pages/Login";
import { RegisterBox } from "../Components/RegisterBox";
import { ContactList } from "../Pages/ContactsList";
import { ContactInfo } from "../Pages/ContactInfo";
import { AddContact } from "../Pages/AddContact";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={RegisterBox} />
      <Stack.Screen name="Contatos" component={ContactList} options={{ headerShown: false }} />
      <Stack.Screen name="Informações" component={ContactInfo} />
      <Stack.Screen name="AddContato" component={AddContact} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
