import { Ionicons } from "@expo/vector-icons";
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
import { useCodeCheckMutation } from "../../auth/slice/auth-api";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { useDialogNotification } from "../../hook/notification/hooks/actions";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import { styles } from "./Register.styles";
import { CustomInput } from "../../components/Input";

export default function Register() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [
    isPasswordVisibleConfirmPassword,
    setIsPasswordVisibleConfirmPassword,
  ] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [codeCheck, { isLoading }] = useCodeCheckMutation();
  const { handleNotification } = useDialogNotification();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const formValues = watch();
  const isFormValid = () => {
    return Object.values(formValues).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
  };

  const onSubmit = async (data: any) => {
    try {
      const userId = await codeCheck({
        email: data.email,
        password: data.password,
        name: data.name,
      }).unwrap();
      navigation.navigate(
        "ConfirmCode" as never,
        {
          userId: userId?.id,
          email: data.email,
          name: data.name,
        } as never
      );
    } catch (error: any) {
      handleNotification({
        isOpen: true,
        variant: "error",
        title: "Falha no acesso",
        message: error.data.messages[0],
      });
      console.log(error);
    }
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
                    <CustomInput
                      errors={errors}
                      placeholder="Digite seu nome"
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
                    <CustomInput
                      errors={errors}
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
                      <CustomInput
                        errors={errors}
                        placeholder="Digite sua senha"
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
                    {errors.password.message || "Senha é obrigatória."}
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
                      <CustomInput
                        errors={errors}
                        placeholder="Digite sua senha"
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
                    {errors.confirmPassword.message || "Senha é obrigatória."}
                  </Text>
                )}
              </View>

              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  isLoading={isLoading}
                  onPress={handleSubmit(onSubmit)}
                  disabled={Object.keys(errors).length > 0 || !isFormValid()}
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
