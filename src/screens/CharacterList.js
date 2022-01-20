import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const CharacterList = ({ navigation }) => {
  const sampleAbilities = [
    {
      title: "Dexterity",
      key: "DEX",
      total: 18,
      modifier: 3,
    },
    {
      title: "Constitution",
      key: "CON",
      total: 18,
      modifier: 3,
    },
    {
      title: "Wisdom",
      key: "WIS",
      total: 18,
      modifier: 3,
    },
  ];
  const characters = [
    {
      name: "Arthur Pendragon",
      id: 1,
      abilities: sampleAbilities,
    },
    {
      name: "Merlin",
      id: 2,
      abilities: sampleAbilities,
    },
    {
      name: "al'Lan Mandragoran Lord of the Seven Towers, Lord of the Lakes, True Blade of Malkier, Defender of the Wall of First Fires, Bearer of the Sword of the Thousand Lakes",
      id: 3,
      abilities: sampleAbilities,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
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
