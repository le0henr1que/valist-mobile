import { API_URL } from "@env";
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
import { useAuth } from "../../auth";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import { styles } from "./Login.styles";
import * as AuthSession from "expo-auth-session";
import { useDialogNotification } from "../../hook/notification/hooks/actions";
import { useMeQuery } from "../../services/me";
import AsyncStorage from "@react-native-async-storage/async-storage";

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

export default function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { handleNotification } = useDialogNotification();

  const CLIENT_ID =
    "57942026538-3dv321nmm8ahcqu6ni6cof70k4fcs374.apps.googleusercontent.com";
  const REDIRECT_URI = AuthSession.makeRedirectUri();
  const RESPONSE_TYPE = "code";
  const SCOPE = ["openid", "profile", "email"];

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: SCOPE,
      redirectUri: REDIRECT_URI,
      responseType: RESPONSE_TYPE,
    },
    discovery
  );

  const handleGoogleSignIn = async () => {
    try {
      const result = await promptAsync();
      if (result.type === "success") {
        const { code } = result.params;

        const tokenResponse = await fetch(
          "https://oauth2.googleapis.com/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              code,
              client_id: CLIENT_ID,
              redirect_uri: REDIRECT_URI,
              grant_type: "authorization_code",
            }).toString(),
          }
        );

        const tokenData = await tokenResponse.json();
        console.log("Access Token", tokenData.access_token);
      } else {
        console.log("Authentication failed", result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const { signIn, isLoading } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await signIn({
        email: data?.email || "",
        password: data?.password || "",
      });
    } catch (e: any) {
      if (e.data.statusCode === 401) {
        setError("email", {
          type: "manual",
          message: "Email ou senha incorretos",
        });
        return;
      }
      handleNotification({
        isOpen: true,
        variant: "error",
        title: "Falha no acesso",
        message:
          "Ocorreu um erro ao tentar acessar o app. Tente novamente mais tarde.",
      });
      // console.log(e);
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
              <Text style={styles.title}>Entre com sua conta</Text>
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
                  <Text style={Input.errorText}>
                    {typeof errors?.email?.message === "string" &&
                    errors?.email?.message === ""
                      ? "Email inválido"
                      : String(errors?.email?.message)}
                  </Text>
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
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  alignItems: "flex-end",
                  marginLeft: 27,
                }}
              >
                <Button
                  variant="white"
                  type="fill"
                  size="small"
                  onPress={() => navigation.navigate("ResetPassword")}
                >
                  Esqueceu a senha?
                </Button>
              </View>
              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  isLoading={isLoading}
                  onPress={handleSubmit(onSubmit)}
                >
                  Entrar
                </Button>
              </View>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 16,
                }}
              >
                <View style={styles.line} />
                <Text
                  style={{
                    color: colors.neutral["500"],
                    fontSize: 12,
                    fontWeight: "normal",
                    lineHeight: 16,
                    marginHorizontal: 10,
                  }}
                >
                  Ou faça login com
                </Text>
                <View style={styles.line} />
              </View>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 15,
                }}
              >
                <View style={{ width: "48.5%", marginTop: 22 }}>
                  <Button
                    variant="neutral"
                    type="outlined"
                    onPress={() => handleGoogleSignIn()}
                  >
                    <Image source={require("../../../assets/google.png")} />
                    Google
                  </Button>
                </View>
                <View style={{ width: "48.5%", marginTop: 22 }}>
                  <Button variant="neutral" type="outlined">
                    <Image source={require("../../../assets/facebook.png")} />
                    Facebook
                  </Button>
                </View>
              </View>
              <View />
              <View>
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
                    onPress={() => navigation.navigate("Register")}
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
