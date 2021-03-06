import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

const CharacterList = ({ navigation }) => {
  const abilities = [
    {
      id: uuid(),
      title: "Dexterity",
      key: "DEX",
      total: 18,
      modifier: "+3",
    },
    {
      id: uuid(),
      title: "Constitution",
      key: "CON",
      total: 18,
      modifier: "+3",
    },
    {
      id: uuid(),
      title: "Wisdom",
      key: "WIS",
      total: 18,
      modifier: "+3",
    },
  ];
  const characters = [
    {
      name: "Arthur Pendragon",
      id: uuid(),
      abilities,
    },
    {
      name: "Merlin",
      id: uuid(),
      abilities,
    },
    {
      name: "al'Lan Mandragoran Lord of the Seven Towers, Lord of the Lakes, True Blade of Malkier, Defender of the Wall of First Fires, Bearer of the Sword of the Thousand Lakes",
      id: uuid(),
      abilities,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={item.name}
          accessibilityRole="button"
          style={styles.touchable}
          onPress={() => {
            navigation.navigate("CharacterSheetHome", item);
          }}
        >
          <View>
            <Text style={styles.touchableText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 16,
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderWidth: 1,
  },
  touchableText: {
    textAlign: "left",
    fontSize: 16,
  },
});

export default CharacterList;
