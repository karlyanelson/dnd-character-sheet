import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabOne = () => {
  return (
    <View style={styles.mainView}>
      <Text>Tab One</Text>
    </View>
  );
};

const TabTwo = () => {
  return (
    <View style={styles.mainView}>
      <Text>Tab Two</Text>
    </View>
  );
};

const TabThree = () => {
  return (
    <View style={styles.mainView}>
      <Text>Tab Three</Text>
    </View>
  );
};

const TabScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Tab One" component={TabOne} />
      <Tab.Screen name="Tab Two" component={TabTwo} />
      <Tab.Screen name="Tab Three" component={TabThree} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabScreen;
