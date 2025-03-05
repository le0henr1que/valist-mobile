import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import Confetti from "../../../assets/icons/confetti";

const NotPass = ({ navigation }: any) => {
  return (
    <View style={styles.modal}>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: colors.success["100"],
            width: 64,
            height: 64,
            borderRadius: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            /*    marginBottom: 20, */
            marginTop: 32,
          }}
        >
          {/*    <Ionicons
            name="checkmark-sharp"
            size={40}
            color={colors.success["600"]}
          /> */}
          <Confetti />
        </View>
      </View>

      <Text style={styles.titleStyle}>Senha resetada com sucesso!</Text>
      <View style={styles.containerText}>
        <Text style={styles.textMessage}>
          Sua senha foi alterada com sucesso! Use a {"\n"} nova senha para
          acessar sua conta.
        </Text>
      </View>

      <View style={{ marginTop: 16, width: 343 }}>
        <Button type="fill" variant="primary" size="large">
          Entendido
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary["600"],
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 48,
    height: 300,
    maxWidth: 343,
  },
  textMessage: {
    color: "#4B5563",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    marginHorizontal: 16,
  },
  titleStyle: {
    color: "#212121",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 12,
  },
  containerText: {
    display: "flex",
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 76,
    borderBottomColor: "#DEDEDE",
    borderBottomWidth: 1,
  },
  container: {
    // padding: 20,
    marginBottom: 48,
    alignItems: "center",
    backgroundColor: "red",
  },
  overlay: {
    zIndex: 1000,
    elevation: 1000,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default NotPass;
