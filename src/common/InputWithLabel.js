import React, { useState } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

const InputWithLabel = ({ label, value, onChangeText, ...props }) => {
  const [borderColor, setBorderColor] = useState("gray");

  const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
    },
    input: {
      borderWidth: 2,
      padding: 16,
      borderRadius: 8,
      borderColor,
      marginBottom: 16,
    },
  });

  // <Text accessible=false -> only works on ios for Text, android will still announce Text
  // <Text importantForAccessibility={"no"} -> only works on Android to hide Text, TextInput announces accessibilityLabel when no value, but doesn't announce accessibilityLabel when there is a value

  return (
    <View style={styles.container}>
      <Text accessible={false}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        onFocus={() => {
          setBorderColor("blue");
        }}
        onBlur={() => {
          setBorderColor("gray");
        }}
        {...props}
      />
    </View>
  );
};

export default InputWithLabel;
