import React from "react";
import { View, Text } from "react-native";

const Details = ({ navigation, route }) => {
  const ability = route.params;

  console.log("Details.js ability", ability);

  return (
    <View>
      <Text>{ability.key}</Text>
      <Text>{ability.title}</Text>
      <Text>{ability.modifier}</Text>
      <Text>{ability.total}</Text>
    </View>
  );
};

export default Details;
