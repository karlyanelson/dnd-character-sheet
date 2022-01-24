import React from "react";
import { Button, View, FlatList } from "react-native";

const Abilities = ({ navigation, route }) => {
  const character = route.params;

  const renderItem = ({ item }) => {
    return (
      <View>
        <Button
          title={`${item.title}: ${item.total} (${item.modifier})`}
          onPress={() => {
            navigation.navigate("CharacterSheet_Abilities_Details", item);
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={character.abilities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Abilities;
