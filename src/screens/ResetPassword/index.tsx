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
import { styles } from "./ResetPassword.styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../HomeScreen";

export default function ResetPassword() {
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

              <View style={{ width: "100%", marginTop: 22 }}>
                <Button
                  type="fill"
                  size="large"
                  // onPress={handleSubmit(onSubmit)}
                  onPress={() => navigation.navigate("NewPassword")}
                >
                  Recuperar Senha{" "}
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
