import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { RootStackParamList } from "../../HomeScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export const CardStore = () => {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={require("../../../../assets/banner.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Mercado da Luz</Text>

        <View style={styles.infoRow}>
          <Ionicons
            name="location-sharp"
            size={18}
            color={colors.primary["700"]}
          />
          <Text style={styles.infoText}>Rua Pelicano, 13, Jardim Aliança</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="people" size={18} color={colors.primary["700"]} />
          <Text style={styles.infoText}>3 Membros</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate.navigate("EditStore")}
        >
          <Text style={styles.buttonText}>Acessar loja</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: "https://link-do-logo" }} style={styles.logo} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    marginBottom: 16,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  button: {
    marginTop: 12,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.primary["600"],
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    top: 90,
    right: 15,
    width: 56,
    height: 56,
    borderRadius: 56,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
  },
});
