import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Input } from "./Input.style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Variant = "normal" | "password";
interface CustomInputProps {
  variant?: Variant;
  errors?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onBlur?: () => void;
}

export const CustomInput = ({
  variant,
  errors,
  ...props
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const inputVariant: any = {
    normal: () => (
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
    ),
    password: () => (
      <TouchableOpacity style={Input.inputPassword}>
        <TextInput
          secureTextEntry={!isPasswordVisible}
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
        <Ionicons
          onPress={() => setPasswordVisible(!isPasswordVisible)}
          name={isPasswordVisible ? "eye" : "eye-off"}
          size={20}
          style={Input.iconEye}
          color="gray"
        />
      </TouchableOpacity>
    ),
  };

  return inputVariant[variant as any]
    ? inputVariant[variant as any]()
    : inputVariant.normal();
};
