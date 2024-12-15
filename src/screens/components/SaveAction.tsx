// src/screens/HomeScreen/screens/expirations/components/FilterModalize.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AtentionIcon from "../../../assets/icons/attention-icon";
import Button from "../../components/Button";
import CustomSwitch from "../../components/Switch";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import { colors } from "../../styles/colors";

const SaveAction = ({ navigation }: any) => {
  const { handleModal } = useDialogModal();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    console.log("isEnabled", isEnabled);
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <AtentionIcon />
        <View style={styles.containerTitles}>
          <Text style={styles.title}>Atenção</Text>
          <Text style={styles.subTitle}>
            Existem campos a serem preenchidos ainda. Tem certeza que deseja
            salvar o produto?
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <CustomSwitch />
          <Text style={styles.switchTitle}>
            Excluir todos os lotes desse produto
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.navigate("Home");
            handleModal({ isOpen: false });
          }}
        >
          Salvar produto
        </Button>
        <Button variant="neutral">Preencher campos</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 0,
    width: "100%",
  },
  switchTitle: {
    color: "18181B",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  title: { color: "#212121", fontSize: 18, fontWeight: 600 },
  subTitle: {
    color: colors.neutral["500"],
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    textAlign: "center",
  },
  containerTitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral["300"],
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingBottom: 24,
  },
  switch: {},
  containerTitles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 12,
    padding: 20,
    textAlign: "center",
  },
});

export default SaveAction;
