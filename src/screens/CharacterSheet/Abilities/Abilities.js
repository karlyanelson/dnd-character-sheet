import React from "react";
import { Button, View, Text, StyleSheet, FlatList } from "react-native";

const Abilities = ({ navigation, route }) => {
  const character = route.params;

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text style={{ fontSize: 20 }}>{item.total}</Text>
        <Button
          title="View Details"
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
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Abilities;
