import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors"; // Ajuste o caminho conforme necessário
import { Ionicons } from "@expo/vector-icons";

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
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="checkmark-sharp"
            size={40}
            color={colors.success["600"]}
          />
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.titleStyle}>Senha resetada com sucesso!</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.textMessage}>
          Sua senha foi alterada com sucesso! Use a nova senha para acessar sua
          conta.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary["600"],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
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
  },
  textMessage: {
    color: "#4B5563",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
  titleStyle: {
    color: "#212121",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
  },
  containerText: {
    display: "flex",
    // marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    // height: 76,
    // borderBottomColor: "#DEDEDE",
    // borderBottomWidth: 1,
  },
  container: {
    // padding: 20,
    marginBottom: 48,
    alignItems: "center",
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
