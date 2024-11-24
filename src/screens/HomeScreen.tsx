// src/screens/HomeScreen.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Button from "../components/Button";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Register: undefined;
  Login: undefined;
  ConfirmCode: undefined;
  InformationStore: undefined;
};

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        variant="danger"
        type="fill"
        size="large"
        disabled={false}
        // isLoading={true}
      >
        Go to Details - Primary
      </Button>
      <Button
        onPress={() => navigation.navigate("Details")}
        variant="primary"
        type="fill"
        size="small"
        disabled={false}
        // isLoading={true}
      >
        Go to Details - Primary
      </Button>
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
