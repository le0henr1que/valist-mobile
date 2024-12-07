// src/screens/HomeScreen/screens/expirations/components/FilterModalize.tsx
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../..";
import PlusIcon from "../../../../../../assets/icons/plus";
import TrashLineIcon from "../../../../../../assets/icons/trash-line";
import { colors } from "../../../../../styles/colors";

const CardAction = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddBatch = () => {
    console.log("Adicionar Lote");
    navigation.navigate("AddBatch");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonAction}
        onPress={() => {
          console.log("Adicionar Lote");
          handleAddBatch();
        }}
      >
        <PlusIcon />
        <Text style={styles.addBatch}>Adicionar Lote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonAction}>
        <TrashLineIcon />
        <Text style={styles.deleteProduct}>Excluir produto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonAction: {
    borderBottomColor: colors.neutral["200"],
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignContent: "center",
  },

  container: {
    // alignItems: "center",
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxHeight: 400,
    width: "100%",
  },
  overlay: {
    zIndex: 1000,
    elevation: 1000,
  },
  addBatch: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  deleteProduct: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.danger["500"],
  },
});

export default CardAction;
