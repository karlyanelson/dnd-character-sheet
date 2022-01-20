import React from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

import { HeaderHeightContext } from "@react-navigation/elements";

const KeyboardAvoidingViewWrapper = ({ children }) => {
  return (
    <HeaderHeightContext.Consumer>
      {(headerHeight) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={headerHeight}
        >
          <ScrollView>
            <View style={{ padding: 24, paddingBottom: 48 }}>{children}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </HeaderHeightContext.Consumer>
  );
};

export default KeyboardAvoidingViewWrapper;
