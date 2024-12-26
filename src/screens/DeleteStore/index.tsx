import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TrashIcon from "../../../assets/icons/trash";
import { Input } from "../../components/Input/Input.style";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../../components/Button";
import { colors } from "../../styles/colors";
import TrashLineIcon from "../../../assets/icons/trash-line";

export default function DeleteStore() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleAddProvider = () => {
    console.log("Adicionar");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
            gap: 24,
            paddingVe rtical: 24,
            borderBottomColor: colors.neutral["200"],
            borderBottomWidth: 1,
          }}
        >
          <Image source={require("../../../assets/trashImageCircle.png")} />

          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Text style={styles.text1}>Deseja excluir sua loja?</Text>
            <Text style={styles.text2}>
              Você está prestes a solicitar a exclusão da sua loja. Esta ação é
              irreversível e resultará na remoção de todos os dados e produtos
              vínculados a essa loja.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 24,
          }}
        >
          <Text style={styles.text3}>
            Para garantir a segurança da sua conta, por favor, informe sua senha
            de acesso.
          </Text>
          <View style={Input.inputView}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TouchableOpacity style={Input.inputPassword}>
                  <TextInput
                    style={errors.password ? Input.styleError : Input.style}
                    placeholder="Senha"
                    secureTextEntry={!isPasswordVisible}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />

                  <Ionicons
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                    name={isPasswordVisible ? "eye" : "eye-off"}
                    size={20}
                    style={Input.iconEye}
                    color="gray"
                  />
                </TouchableOpacity>
              )}
              name="password"
            />
            {errors.password && (
              <Text style={Input.errorText}>Senha é obrigatória.</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.footerButtom}>
        <Button variant="danger" onPress={() => handleAddProvider()}>
          Excluir Loja
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  text1: {
    color: colors.neutral["900"],
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "center",
  },
  text2: {
    color: colors.neutral["500"],
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
  },
  text3: {
    color: colors.neutral["900"],
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 24,
  },
  footerButtom: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#FFF",
    boxShadow: "0px -4px 12px 0px rgba(151, 151, 151, 0.15)",
  },
});
