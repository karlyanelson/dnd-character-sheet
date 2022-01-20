// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CharacterList from "./src/screens/CharacterList";
import CharacterSheet from "./src/screens/CharacterSheet/CharacterSheet";
import Abilities from "./src/screens/CharacterSheet/Abilities/Abilities";
import AbilitiesDetails from "./src/screens/CharacterSheet/Abilities/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CharacterList"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{ title: "Characters" }}
        />
        <Stack.Screen
          name="CharacterSheetHome"
          component={CharacterSheet}
          options={({ route }) => {
            return { title: route.params.name };
          }}
        />
        <Stack.Screen
          name="CharacterSheet_Abilities"
          component={Abilities}
          options={{ title: "Abilities" }}
        />
        <Stack.Screen
          name="CharacterSheet_Abilities_Details"
          component={AbilitiesDetails}
          options={({ route }) => {
            return { title: route.params.title };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
