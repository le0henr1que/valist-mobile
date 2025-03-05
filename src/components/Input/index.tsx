"use client";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { DataPicker } from "./DatePicker";
import { Input } from "./Input.style";
import { OptionsInput } from "./Options";

type Variant = "normal" | "password" | "option" | "date";
interface CustomInputProps {
  variant?: Variant;
  errors?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onBlur?: () => void;
  name: string;
  options?: { id: string; label: string }[];
  onChange?: (date: string) => void;
}

export const CustomInput = ({
  variant,
  errors,
  options,
  ...props
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const hasError = errors && errors[props?.name];

  const inputVariant: any = {
    date: () => <DataPicker errors={errors} {...props} />,
    option: () => <OptionsInput {...props} errors={errors} options={options} />,
    normal: () => (
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
    ),
    password: () => (
      <TouchableOpacity style={Input.inputPassword}>
        <TextInput
          secureTextEntry={!isPasswordVisible}
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
