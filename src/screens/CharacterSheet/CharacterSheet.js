import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const CharacterSheet = ({ navigation, route }) => {
  const character = route.params;

  return (
    <View>
      <Text>{character.name}</Text>

      <Button
        title="Abilities"
        onPress={() => {
          navigation.navigate("CharacterSheet_Abilities", character);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CharacterSheet;
