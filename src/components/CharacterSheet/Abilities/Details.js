import React, { useState } from "react";
import { Platform } from "react-native";

import KeyboardAvoidingViewWrapper from "../../../common/KeyboardAvoidingViewWrapper";
import InputWithLabel from "../../../common/InputWithLabel";

const Details = ({ route }) => {
  const ability = route.params;

  const [key, setKey] = useState(ability.key);
  const [title, setTitle] = useState(ability.title);
  const [modifier, setModifier] = useState(`${ability.modifier}`);
  const [total, setTotal] = useState(`${ability.total}`);

  return (
    <KeyboardAvoidingViewWrapper>
      <InputWithLabel label="Title" value={title} onChangeText={setTitle} />
      <InputWithLabel label="Key" value={key} onChangeText={setKey} />
      <InputWithLabel
        label="Modifier"
        value={modifier}
        onChangeText={setModifier}
        keyboardType={
          Platform.OS === "ios" ? "numbers-and-punctuation" : "default"
        }
      />
      <InputWithLabel
        label="Total"
        value={total}
        onChangeText={setTotal}
        keyboardType="number-pad"
      />
    </KeyboardAvoidingViewWrapper>
  );
};

export default Details;
