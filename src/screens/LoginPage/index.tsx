// src/screens/DetailsScreen.tsx
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { Input } from "../../components/Input/Input.style";
import { colors } from "../../styles/colors";
import { styles } from "./Login.styles";

export default function Login() {
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
      <View style={styles.header}>
        <View style={styles.textHeader}>
          <Image
            style={styles.image}
            source={require("../../../assets/default-icon.png")}
          />
          <Text style={styles.title}>Entre com sua conta</Text>
        </View>
      </View>
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
          <View style={Input.inputView}>
            <Text style={Input.label}>Email</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.password ? Input.styleError : Input.style}
                  placeholder="Senha"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
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
              title="Esqueceu a senha?"
            />
          </View>
          <View style={{ width: "100%", marginTop: 22 }}>
            <Button
              type="fill"
              title="Entrar"
              size="large"
              onPress={handleSubmit(onSubmit)}
            />
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
                title="Google"
                // icon={<IconContext />}
              />
            </View>
            <View style={{ width: "48.5%", marginTop: 22 }}>
              <Button
                variant="neutral"
                type="outlined"
                title="Facebook"
                // icon={<>X</>}
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    </View>
  );
}
