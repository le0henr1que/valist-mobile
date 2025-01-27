import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Input } from "./Input.style";

export const CustomInput = ({ errors, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        isFocused
          ? { ...Input.focusedStyle }
          : errors.email
          ? Input.styleError
          : Input.style,
      ]}
      {...props}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
