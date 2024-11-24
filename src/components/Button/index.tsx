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
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode; // Adicionando a propriedade children
}

const Button: React.FC<ButtonProps> = ({
  type = "fill",
  variant = "primary",
  size = "large",
  isLoading = false,
  disabled = false,
  children, // Usando a propriedade children
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

      {children ? (
        typeof children === "string" ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          React.Children.map(children, (child) =>
            typeof child === "string" ? (
              <Text style={styles.text}>{child}</Text>
            ) : (
              child
            )
          )
        )
      ) : null}
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
