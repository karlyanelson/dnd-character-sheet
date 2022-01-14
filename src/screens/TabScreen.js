import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabOne = (props) => {
  console.log("TabOne props", props);
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

const TabScreen = ({ navigation, route }) => {
  const character = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Background" component={TabOne} />
      <Tab.Screen name="Stats" component={TabTwo} />
      <Tab.Screen name="Actions" component={TabThree} />
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
