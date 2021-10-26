import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./src/Screens/Home"
import Casa from "./src/Screens/Casa"

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="casa" component={Casa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row"
  }
});

export default Navigation;
