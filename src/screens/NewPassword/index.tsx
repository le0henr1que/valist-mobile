import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import { useRecoveryPasswordMutation } from "../../auth/slice/auth-api";
import { useDialogNotification } from "../../hook/notification/hooks/actions";

import { useDialogModal } from "../../hook/handle-modal/hooks/actions";

import NotPass from "../components/ResetNotification";

export default function NewPassword() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const route = useRoute();
  const { access_token } = route.params || ({} as any);

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
    watch,
  } = useForm();

  const password = watch("password");
  const [recoveryPassword, { isLoading }] = useRecoveryPasswordMutation();

 
  const { handleModal } = useDialogModal();

 const handleValidateField = () => {
    handleModal({
      isOpen: true, 
      element: <NotPass navigation={navigation} />,
    });
  };
  const onSubmit = async (data: any) => {
    try {
      await recoveryPassword({
        accessToken: access_token,
        newPassword: data.password,
      }).unwrap();
      navigation.navigate("Login");
      handleValidateField();
    } catch (error: any) {
      navigation.navigate("Login");
      /* handleNotification({
        isOpen: true,
        variant: "error",
        title: "Falha no acesso",
        message: error.data.messages title: "Falha no acesso",
        message: error.data.messages[0] || "Ocorreu um erro",
      }); */
      console.log(error);
    }
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
                source={require("../../../assets/logo-white.png")}
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
                  rules={{
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
                    },
                  }}
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
                  <Text style={Input.errorText}>
                    {errors.password?.message?.toString() ||
                      "Senha é obrigatória."}
                  </Text>
                )}
              </View>
              <View style={Input.inputView}>
                <Text style={Input.label}>Repita sua senha</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) =>
                      value === password || "As senhas não coincidem.",
                  }}
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
                  <Text style={Input.errorText}>
                    {errors.confirmPassword?.message?.toString() ||
                      "Confirmação de senha é obrigatória."}
                  </Text>
                )}
              </View>

              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  isLoading={isLoading}
                  onPress={handleSubmit(onSubmit)}
                >
                  Continuar
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
                  Não possui conta?
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
