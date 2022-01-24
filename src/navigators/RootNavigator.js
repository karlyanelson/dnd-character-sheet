import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CharacterList from "../components/CharacterList";
import CharacterSheet from "../components/CharacterSheet/CharacterSheet";
import Abilities from "../components/CharacterSheet/Abilities/Abilities";
import AbilitiesDetails from "../components/CharacterSheet/Abilities/Details";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
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
  );
};

export default RootNavigator;
