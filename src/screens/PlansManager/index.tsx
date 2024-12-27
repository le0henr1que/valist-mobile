import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import CustomSwitch from "../../components/Switch";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import { Ionicons } from "@expo/vector-icons";

export default function PlansManager() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {/* Banner e Avatar */}
      <View>
        {/* Formulário */}
        <View style={styles.form}>
          <View
            style={{
              borderRadius: 8,
              padding: 16,
              width: "100%",
              alignSelf: "stretch",
              borderWidth: 1,
              borderColor: colors.neutral["300"],
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <View
                style={{
                  borderRadius: 32,
                  width: 32,
                  height: 32,
                  backgroundColor: colors.primary["500"],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="trophy-sharp" size={16} color="white" />
              </View>
              <View>
                <Text
                  style={{
                    color: colors.neutral["500"],
                    fontSize: 12,
                    fontWeight: "600",
                    lineHeight: 16,
                  }}
                >
                  Seu Plano
                </Text>
                <Text
                  style={{
                    color: colors.neutral["900"],
                    fontSize: 16,
                    fontWeight: "600",
                    lineHeight: 24,
                  }}
                >
                  Plano FREE
                </Text>
                <Text
                  style={{
                    color: colors.neutral["500"],
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 20,
                  }}
                >
                  Nosso plano mais básico
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "600",
                  lineHeight: 24,
                  marginTop: 20,
                }}
              >
                O seu plano inclui:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 28 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="checkmark"
                  size={24}
                  color={colors.primary["500"]}
                />
                <Text>Cadastrar até 100 produtos</Text>
              </View>
            </View>
            <View style={{ marginTop: 11 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="close-sharp"
                  size={24}
                  color={colors.danger["600"]}
                />
                <Text>Cadastrar até 100 produtos</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Botão */}
      <View style={styles.footerButtom}>
        <Button
          style={{
            backgroundColor: "#D9B600",
            borderRadius: 8,
            padding: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 48,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          Seja premium por R$ 39,99/mês
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  bannerContainer: {
    height: 150,
    position: "relative",
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  avatarWrapper: {
    position: "absolute",
    bottom: -40,
    left: 20,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#fff",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: colors.primary["500"],
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    width: 20,
    height: 20,
  },
  footerButtom: {
    display: "flex",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#FFF",
    boxShadow: "0px -4px 12px 0px rgba(151, 151, 151, 0.15)",
  },
  form: {
    marginTop: 29,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: colors.neutral["600"],
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.neutral["300"],
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral["300"],
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: colors.primary["500"],
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
