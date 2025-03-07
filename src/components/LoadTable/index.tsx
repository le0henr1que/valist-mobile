import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import EmptyIcon from "../../../assets/icons/not-exist";
import { colors } from "../../styles/colors";

export function LoadTable({ isLoading, dataTableLength }: any) {
  if (isLoading) {
    return (
      <View style={{ width: "100%", flex: 2, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={colors.primary[500]} />
      </View>
    );
  }

  if (dataTableLength === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <EmptyIcon />
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: 20,
          }}
        >
          Nenhum produto encontrado
        </Text>
      </View>
    );
  }

  return null;
}
