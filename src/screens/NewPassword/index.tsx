import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import { styles } from "./NewPassword";

import { Modalize } from "react-native-modalize";

export default function NewPassword() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [
    isPasswordVisibleConfirmPassword,
    setIsPasswordVisibleConfirmPassword,
  ] = useState(false);

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

  const modalizeRef = useRef<{ open: () => void } | null>(null);

  const openModal = (event: any) => {
    event.persist();
    console.log(event.nativeEvent);
    modalizeRef.current?.open();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.header}
            resizeMode="contain"
            resizeMethod="auto"
            imageStyle={{ left: 140 }}
          >
            <View style={styles.textHeader}>
              <Image
                source={require("../../../assets/logo.png")}
                style={styles.image}
              />
              <Text style={styles.title}>Resetar senha</Text>
            </View>
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={Input.inputView}>
                <Text style={Input.label}>Senha</Text>
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
              <View style={Input.inputView}>
                <Text style={Input.label}>Repita sua senha</Text>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity style={Input.inputPassword}>
                      <TextInput
                        style={
                          errors.confirmPassword
                            ? Input.styleError
                            : Input.style
                        }
                        placeholder="Senha"
                        secureTextEntry={!isPasswordVisibleConfirmPassword}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      <Ionicons
                        onPress={() =>
                          setIsPasswordVisibleConfirmPassword(
                            !isPasswordVisibleConfirmPassword
                          )
                        }
                        name={
                          isPasswordVisibleConfirmPassword ? "eye" : "eye-off"
                        }
                        size={20}
                        style={Input.iconEye}
                        color="gray"
                      />
                    </TouchableOpacity>
                  )}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <Text style={Input.errorText}>Senha é obrigatória.</Text>
                )}
              </View>

              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  // onPress={handleSubmit(onSubmit)}
                  onPress={(event) => openModal(event)}
                >
                  Continuar{" "}
                </Button>
              </View>
              <View />
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text
                  style={{
                    color: colors.neutral["500"],
                    fontSize: 14,
                    fontWeight: "normal",
                    lineHeight: 20,
                    textAlign: "center",
                    marginTop: 16,
                  }}
                >
                  Não possui conta?{" "}
                  <Text
                    onPress={(event) => {
                      navigation.navigate("Register");
                    }}
                    style={{
                      color: colors.primary["600"],
                      fontSize: 14,
                      fontWeight: "bold",
                      lineHeight: 20,
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    Registre-se
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Modalize
          ref={modalizeRef}
          handleStyle={{ backgroundColor: "#007F5F" }}
          modalStyle={styles.modal}
          adjustToContentHeight={true}
        >
          <View
            style={{
              height: 324,
              backgroundColor: "#FFF",
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Image source={require("../../../assets/success-icon.png")} />
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.black,
                    fontWeight: 600,
                    lineHeight: 28,
                  }}
                >
                  Senha resetada com sucesso!
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.neutral["600"],
                      fontWeight: 600,
                      lineHeight: 28,
                      textAlign: "center",
                    }}
                  >
                    Sua senha foi alterada com sucesso! Use a nova senha para
                    acessar sua conta.{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  borderTopWidth: 1,
                  paddingTop: 16,
                  borderTopColor: colors.neutral["100"],
                }}
              >
                <Button onPress={() => navigation.navigate("Home")}>
                  Acessar minha loja
                </Button>
              </View>
            </View>
          </View>
        </Modalize>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
