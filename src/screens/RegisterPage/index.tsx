import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { styles } from "./Register.styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../HomeScreen";

export default function Register() {
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
              <Text style={styles.title}>Cadastre-se</Text>
            </View>
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={Input.inputView}>
                <Text style={Input.label}>Nome do usuário</Text>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={errors.name ? Input.styleError : Input.style}
                      placeholder="name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
                {errors.name && (
                  <Text style={Input.errorText}>Nome é obrigatório.</Text>
                )}
              </View>
              <View style={Input.inputView}>
                <Text style={Input.label}>Email</Text>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={errors.email ? Input.styleError : Input.style}
                      placeholder="Email"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text style={Input.errorText}>Email é obrigatório.</Text>
                )}
              </View>
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
                  onPress={() => navigation.navigate("ConfirmCode")}
                >
                  Criar conta{" "}
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
                  Já possui conta?{" "}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={{
                      color: colors.primary["600"],
                      fontSize: 14,
                      fontWeight: "bold",
                      lineHeight: 20,
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    Entrar
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
