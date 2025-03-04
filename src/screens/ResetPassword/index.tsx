import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
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
import { v4 as uuidv4 } from "uuid";
import { useForgotPasswordMutation } from "../../auth/slice/auth-api";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import { styles } from "./ResetPassword.styles";
import { useDialogNotification } from "../../hook/notification/hooks/actions";
import { CustomInput } from "../../components/Input";

import BackIconV3 from "../../../assets/icons/backIcon-v3";
import { typography } from "../../styles/typography";

export default function ResetPassword() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { handleNotification } = useDialogNotification();

  const formValues = watch();
  const isFormValid = () => {
    return Object.values(formValues).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
  };

  const onSubmit = async (data: any) => {
    try {
      const userBeingEditedId = "";

      await forgotPassword({
        email: data.email,
        userBeingEditedId,
      }).unwrap();
      navigation.navigate(
        "ConfirmCodePassword" as never,
        {
          email: data.email,
        } as never
      );
    } catch (error: any) {
      console.log(error);
      handleNotification({
        isOpen: true,
        variant: "error",
        title: "Erro ao enviar código",
        message: error?.data?.messages[0] || "Ocorreu um erro",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 0 }}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.header}
            resizeMode="contain"
            resizeMethod="auto"
            imageStyle={{ left: 140 }}
          >
            <View style={styles.textHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIconV3 />
              </TouchableOpacity>
              <Text style={styles.title}>Esqueci a senha</Text>
            </View>
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={Input.inputView}>
                <Text style={Input.label}>Email</Text>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                      errors={errors}
                      name="email "
                      placeholder="Digite seu email"
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

              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  onPress={handleSubmit(onSubmit)}
                  isLoading={isLoading}
                  disabled={Object.keys(errors).length > 0 || !isFormValid()}
                  // onPress={() => navigation.navigate("NewPassword")}
                >
                  Recuperar Conta
                </Button>
              </View>
              <View />
              <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <Text
                  style={{
                    color: colors.neutral["500"],
                    fontSize: 14,
                    /* fontWeight: "normal", */
                    fontFamily: typography.fontFamily.regular,
                    lineHeight: 20,
                    textAlign: "center",
                    marginTop: 24,
                  }}
                >
                  Não possui conta?{" "}
                  <Text
                    onPress={() => navigation.navigate("Register")}
                    style={{
                      color: colors.primary["600"],
                      fontSize: 14,
                      /* fontWeight: "bold", */
                      fontFamily: typography.fontFamily.bold,
                      lineHeight: 20,
                      textAlign: "center",
                      marginTop: 24,
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
