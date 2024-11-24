import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { RadioButton, ProgressBar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../styles/colors";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { Input } from "../../components/Input/Input.style";
import { Controller, set, useForm } from "react-hook-form";
import Button from "../../components/Button";

const Stack = createNativeStackNavigator();

// Barra de progresso
const ProgressHeader = ({ progress }: { progress: number }) => (
  <ProgressBar
    progress={progress}
    color={colors.primary["600"]}
    style={styles.progressBar}
  />
);

// Tela 1: Nome do Estabelecimento
function EstablishmentScreen({ navigation }: { navigation: any }) {
  const [name, setName] = useState("");
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
      <View>
        <ProgressHeader progress={0.25} />

        <View>
          <Text style={styles.title}>
            Seja bem vindo <Text style={styles.highlight}>João pereira</Text>.
            Para começar, insira o nome do seu estabelecimento.
          </Text>
          <Text style={styles.subtitle}>
            Não se preocupe, você poderá alterar os dados depois.
          </Text>
        </View>
        <View style={Input.inputView}>
          <Text style={Input.label}>Nome do estabelecimento</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={errors.storeName ? Input.styleError : Input.style}
                placeholder="Ex: Loja Estrela"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="storeName"
          />
          {errors.storeName && (
            <Text style={Input.errorText}>
              Nome do estabelecimento é obrigatório.
            </Text>
          )}
        </View>
      </View>
      <View>
        <Button
          type="fill"
          size="large"
          onPress={() => {
            handleSubmit(onSubmit);
            navigation.navigate("Notifications");
          }}
        >
          Continuar
        </Button>
      </View>
    </View>
  );
}

// Tela 2: Deseja receber notificações?
function NotificationsScreen({ navigation }: { navigation: any }) {
  const [checked, setChecked] = useState("sim");

  return (
    <View style={styles.container}>
      <View>
        <ProgressHeader progress={0.5} />
        <View>
          <Text style={styles.title}>
            Certo! Você deseja receber notificações dos vencimentos?
          </Text>
          <Text style={styles.subtitle}>
            Iremos notificar para você quando o produto ou o lote estiver
            vencido ou próximo da data de validade. Não se preocupe, você poderá
            alterar isso depois.
          </Text>
        </View>
        <RadioButton.Group
          onValueChange={(newValue) => setChecked(newValue)}
          value={checked}
        >
          <View style={styles.radioItem}>
            <Image source={require("../../../assets/bell.png")} />
            <Text style={styles.radioItemText}>
              Sim, desejo receber notificações pelo{" "}
              <Text style={{ fontWeight: "bold" }}>aplicativo</Text>
            </Text>
            <RadioButton value="yes" color={colors.primary["600"]} />
          </View>
          <View style={styles.radioItem}>
            <Image source={require("../../../assets/not-bell.png")} />
            <Text style={styles.radioItemText}>
              Não desejo receber notificações
            </Text>
            <RadioButton value="not" color={colors.primary["600"]} />
          </View>
        </RadioButton.Group>
      </View>
      <View style={{ gap: 16 }}>
        <Button
          type="fill"
          size="large"
          onPress={() => {
            // handleSubmit(onSubmit);
            navigation.navigate("Expiration");
          }}
        >
          Continuar
        </Button>
        <Button
          type="fill"
          size="medium"
          variant="neutral"
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
}

// Tela 3: Intervalo de notificações
function ExpirationScreen({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState("");
  const [customDays, setCustomDays] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View>
          <ProgressHeader progress={0.75} />
          <Text style={styles.title}>
            Quase lá! Em quantos dias antes do vencimento você deseja ser
            notificado?
          </Text>
          <Text style={styles.subtitle}>
            Configure o intervalo de dias que você deseja receber notificações
            sobre os produtos prestes a vencer.
          </Text>
        </View>
        <View style={{ marginBottom: 32 }}>
          {[
            "Diariamente",
            "A cada 7 dias",
            "A cada 15 dias",
            "A cada 30 dias",
            "A cada 90 dias",
          ].map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => setSelected(option)}
            >
              <RadioButton
                value={option}
                color={colors.primary["600"]}
                status={selected === option ? "checked" : "unchecked"}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: colors.neutral["900"],
                  lineHeight: 24,
                  fontWeight: 500,
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={Input.inputView}>
          <Text style={Input.label}>Outra quantidade? Digite abaixo</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={errors.amount ? Input.styleError : Input.style}
                placeholder="0 dias"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="amount"
          />
          {errors.amount && (
            <Text style={Input.errorText}>Quantidade obrigatória</Text>
          )}
        </View>
      </View>
      <View>
        <View style={{ gap: 16 }}>
          <Button
            type="fill"
            size="large"
            onPress={() => {
              // handleSubmit(onSubmit);
              navigation.navigate("Loading");
            }}
          >
            Continuar
          </Button>
          <Button
            type="fill"
            size="medium"
            variant="neutral"
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

// Tela 4: Carregando
function LoadingScreen({ navigation }: { navigation: any }) {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 200);

  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        paddingTop: 60,
        paddingBottom: 60,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image source={require("../../../assets/logo-primary.png")} />
      </View>
      <View>
        <ActivityIndicator size="large" color={colors.primary["600"]} />
      </View>
      <View>
        <Text style={styles.loadingText}>
          Tudo pronto! notificado? {"\n"}Estamos configurando sua conta...
        </Text>
      </View>
    </View>
  );
}

export default function InformationStore() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Establishment" component={EstablishmentScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Expiration" component={ExpirationScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    justifyContent: "space-between",
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 32,
    fontWeight: "bold",
    color: colors.neutral["900"],
    lineHeight: 28,
    marginBottom: 16,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    color: "#71727A",
    fontWeight: "normal",
    lineHeight: 20,
    textAlign: "left",
  },
  highlight: {
    color: colors.primary["600"],
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.primary["600"],
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: colors.primary["600"],
  },
  radioItem: {
    gap: 12,
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.neutral["300"],
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
    padding: 16,
    position: "relative",
  },
  radioItemText: {
    flex: 1,
    flexWrap: "wrap",
    color: colors.neutral["900"],
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    fontSize: 16,
  },
  loadingText: {
    fontSize: 16,
    color: colors.neutral["900"],
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "medium",
  },
});