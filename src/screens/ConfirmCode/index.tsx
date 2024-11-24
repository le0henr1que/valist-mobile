import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../../components/Button";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";

export default function RegisterCode() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(62);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);

    if (text && index < code.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (text === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  React.useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formattedTimer = `0${Math.floor(timer / 60)}:${
    timer % 60 < 10 ? "0" : ""
  }${timer % 60}`;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View></View>
      <View>
        <Text style={styles.title}>Insira o código de confirmação</Text>
        <Text style={styles.subtitle}>
          Um código de 4 dígitos foi enviado para o email
          {"\n"}
          <Text style={styles.email}>lucasscott3@email.com</Text>
        </Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.input}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace("", index);
                }
              }}
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate("InformationStore")}
          variant="primary"
          type="fill"
          size="large"
          disabled={false}
        >
          Validar código
        </Button>

        <Text style={styles.resendText}>
          Não recebeu o código?{" "}
          <Text style={styles.timer}>Aguarde {formattedTimer}</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
    color: colors.neutral["500"],
    fontWeight: "normal",
    lineHeight: 20,
  },
  email: {
    fontWeight: "normal",
    color: colors.primary["600"],
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    marginBottom: 24,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: colors.neutral["300"],
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF93",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendText: {
    marginTop: 16,
    textAlign: "center",
    fontWeight: "normal",
    lineHeight: 24,
    color: colors.neutral["900"],
  },
  timer: {
    fontWeight: "normal",
    lineHeight: 24,
    color: colors.neutral["500"],
  },
});