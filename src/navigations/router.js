import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/home";
import EvenementScreen from "../screens/evenement";
import SportScreen from "../screens/sport";
import CinemaScreen from "../screens/cinema";
import ProfilScreen from "../screens/profil";
import DetailEvenement from "../screens/detailEvenement";


const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name={"HomeScreen"}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"EvenementScreen"}
          component={EvenementScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"SportScreen"}
          component={SportScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"CinemaScreen"}
          component={CinemaScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"ProfilScreen"}
          component={ProfilScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"DetailEvenement"}
          component={DetailEvenement}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
