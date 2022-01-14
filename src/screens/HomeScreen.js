import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const characters = [
    {
      name: "Character 1",
      id: 1,
    },
    {
      name: "Character 2",
      id: 2,
    },
    {
      name: "Character 3",
      id: 3,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 24 }}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            navigation.navigate("CharacterTabs", item);
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
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    backgroundColor: "tomato",
    padding: 16,
    marginVertical: 16,
    borderRadius: 50,
  },
  touchableText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
