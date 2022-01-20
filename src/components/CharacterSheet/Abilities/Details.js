import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";

import KeyboardAvoidingViewWrapper from "../../../common/KeyboardAvoidingViewWrapper";

const AccessibleInput = ({ label, value, onChangeText, ...props }) => {
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

  return (
    <View accessible={true} accessibilityLabel={label} style={styles.container}>
      <Text>{label}</Text>
      <TextInput
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

const Details = ({ navigation, route }) => {
  const ability = route.params;

  const [key, setKey] = useState(ability.key);
  const [title, setTitle] = useState(ability.title);
  const [modifier, setModifier] = useState(`${ability.modifier}`);
  const [total, setTotal] = useState(`${ability.total}`);

  return (
    <KeyboardAvoidingViewWrapper>
      <AccessibleInput label="Key" value={key} onChangeText={setKey} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput label="Title" value={title} onChangeText={setTitle} />
      <AccessibleInput
        label="Modifier"
        value={modifier}
        onChangeText={setModifier}
        keyboardType={
          Platform.OS === "ios" ? "numbers-and-punctuation" : "default"
        }
      />
      <AccessibleInput
        label="Total"
        value={total}
        onChangeText={setTotal}
        keyboardType="number-pad"
      />
    </KeyboardAvoidingViewWrapper>
  );
};

export default Details;
