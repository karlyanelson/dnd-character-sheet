// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import TabScreen from "./src/screens/TabScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{ title: "Movies" }}
        />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
          options={({ route }) => {
            console.log({ route });
            return { title: route.params.item.title };
          }}
        />
        <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
          options={{ title: "More Details" }}
        />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
          options={{ title: "Image" }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{ title: "Tabs" }}
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
