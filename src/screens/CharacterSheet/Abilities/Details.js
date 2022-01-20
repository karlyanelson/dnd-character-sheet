import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

const Details = ({ navigation, route }) => {
  const ability = route.params;

  const [key, setKey] = useState(ability.key);
  const [title, setTitle] = useState(ability.title);

  const AccessibleInput = ({ label, value, onChangeText }) => {
    return (
      <View accessible={true} accessibilityLabel={label}>
        <Text>{label}</Text>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <AccessibleInput label="Key" value={key} onChangeText={setKey} />

      <View accessible={true} accessibilityLabel="Title">
        <Text>Title</Text>
        <TextInput value={title} style={styles.input} onChangeText={setTitle} />
      </View>

      {/* <Text>{ability.modifier}</Text>
      <Text>{ability.total}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
  },
});

export default Details;
