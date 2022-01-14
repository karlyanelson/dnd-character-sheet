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
  const movies = [
    {
      title: "Star Wars",
      release: 1977,
      screenNumber: 1,
    },
    {
      title: "Black Panther",
      release: 2018,
      screenNumber: 1,
    },
    {
      title: "The Matrix",
      release: 1999,
      screenNumber: 1,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Button
        title={item.title}
        color="tomato"
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={{ marginVertical: 24 }}>
        <Text>Other Navigation</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            navigation.navigate("TabScreen");
          }}
        >
          <View>
            <Text style={styles.touchableText}>Go to Tabs</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text>Home Screen</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
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
