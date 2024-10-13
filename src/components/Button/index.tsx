import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import getButtonStyles from "./Button.styles";
import { StyleSheet } from "react-native";

export type ButtonType = "outlined" | "fill" | "subtle" | "ghost";
export type ButtonVariant = "primary" | "white" | "danger" | "neutral";
export type ButtonSize = "small" | "large" | "medium" | "x-small";

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  title: string;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "fill",
  variant = "primary",
  size = "large",
  isLoading = false,
  disabled = false,
  title,
  ...props
}) => {
  const styles = getButtonStyles(type, variant, size);

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      style={
        disabled ? { ...styles.button, ...styleGlobal.disabled } : styles.button
      }
      {...props}
    >
      {isLoading && (
        <ActivityIndicator
          style={styleGlobal.spinner}
          color={styles.text.color}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styleGlobal = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  spinner: {},
});
export default Button;
