import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";

export default function ModifyPassword() {
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
      <View>
        <View style={styles.form}>
          <View style={Input.inputView}>
            <Text style={Input.label}>Senha atual</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.qtdItems ? Input.styleError : Input.style}
                  placeholder="Ex: 12"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="qtdItems"
            />
            {errors.name && (
              <Text style={Input.errorText}>
                Qauntidade de items é obrigatório.
              </Text>
            )}
          </View>
          <View style={Input.inputView}>
            <Text style={Input.label}>Nova Senha</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.qtdItems ? Input.styleError : Input.style}
                  placeholder="Ex: 12"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="qtdItems"
            />
            {errors.name && (
              <Text style={Input.errorText}>
                Qauntidade de items é obrigatório.
              </Text>
            )}
          </View>
          <View style={Input.inputView}>
            <Text style={Input.label}>Confirmar nova senha</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.qtdItems ? Input.styleError : Input.style}
                  placeholder="Ex: 12"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="qtdItems"
            />
            {errors.name && (
              <Text style={Input.errorText}>
                Qauntidade de items é obrigatório.
              </Text>
            )}
          </View>
        </View>
      </View>
      {/* Botão */}
      <View style={styles.footerButtom}>
        <Button onPress={() => navigation.navigate("Home")}>
          Alterar Senha
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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  avatarWrapper: {},
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
    marginTop: 20,
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
