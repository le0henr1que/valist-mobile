import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Input } from "./Input.style";

export const CustomInput = ({ errors, name, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = errors && errors[name];

  return (
    <TextInput
      style={[
        isFocused
          ? { ...Input.focusedStyle }
          : hasError
          ? Input.styleError
          : Input.style,
      ]}
      {...props}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
