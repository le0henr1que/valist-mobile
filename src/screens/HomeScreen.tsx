// src/screens/HomeScreen.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Button from "../components/Button";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details - Primary"
        onPress={() => navigation.navigate("Details")}
        variant="danger"
        type="fill"
        size="large"
        disabled={false}
        // isLoading={true}
      />
      <Button
        title="Go to Details - Primary"
        onPress={() => navigation.navigate("Details")}
        variant="primary"
        type="fill"
        size="small"
        disabled={false}
        // isLoading={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
});
