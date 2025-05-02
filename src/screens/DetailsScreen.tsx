// src/screens/DetailsScreen.tsx
import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useGetOneProductQuery } from "../services/product";

export default function DetailsScreen() {

    const {productId} = useRoute().params as any;
    console.log("ID DO PRODUTO", productId);

    const {data} = useGetOneProductQuery({id: productId});
    console.log("DADOS DO PRODUTO", data);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
