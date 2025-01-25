import React, { useEffect, useState } from "react";
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
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../styles/colors";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { Input } from "../../components/Input/Input.style";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/Button";
import LottieView from "lottie-react-native";
import animation from "../../../assets/lotload.json";
import { useRegisterMutation } from "../../auth/slice/auth-api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../../auth/slice/auth-slice";
import { useDispatch } from "react-redux";
import {
  labelNotificationTimeEnum,
  NotificationTimeEnum,
} from "../../enum/notification";
import Svg, { Path, Rect } from "react-native-svg";
import CustomIcon from "../../../assets/icons/logo2";

const Stack = createNativeStackNavigator();

// Barra de progresso
const ProgressHeader = ({ progress }: { progress: number }) => (
  <ProgressBar
    progress={progress}
    color={colors.primary["600"]}
    style={styles.progressBar}
  />
);


//tela1: Objetivo do estabelcimento

function ObjectiveScreen ({ navigation, formMethods } :{ navigation: any; formMethods: any; }) {

  const [checked, setChecked] = useState("owners");
  const { setValue, handleSubmit } = formMethods;
  setValue("Objective", checked);
  const onSubmit = (data: any) => {
    navigation.navigate("Establishment", { ...data });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 24,
          marginBottom: 32,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <CustomIcon />
        </View>
      <View>
       <Text style={styles.title}>
            Antes de começarmos, 
            qual seu objetivo com o aplicativo.
          </Text>
      <Text style={styles.subtitle}>
            Selecione se você é o dono da sua própria 
            loja, promotor de merchandising se foi
            convidado para acessar uma loja existente.
          </Text>
          </View>
          <View>
            <TouchableOpacity
            style={[styles.radioItem,
            checked === 'owner' && styles.checked,
            ]}
            onPress={()=>setChecked("owner")}>
            <View  style={styles.radioGroup}>
            <Image source={require("../../../assets/bell.png")} />
            <Text style={styles.titleButton}>Sou dono da loja</Text>
            <Text style={styles.radioText}>
              Quero gerenciar e administrar meu {'\n'}
              próprio estabelecimento.</Text> 
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.radioItem,
            checked === 'member' && styles.checked,
            ]}
            onPress={()=>setChecked("member")}>
            <View  style={styles.radioGroup}>
            <Image source={require("../../../assets/bell.png")} />
            <Text style={styles.titleButton}>Sou membro (convidado)</Text>
            <Text style={styles.radioText}>
              Fui convidado para colaborar em uma {'\n'} loja e possuo o código de acesso.</Text>  
            </View>    
            </TouchableOpacity>
            
          </View>
      <View style={{ gap: 16 }}>
        <Button type="fill" size="large" onPress={handleSubmit(onSubmit)}>
          Continuar
        </Button>
      </View>
    </View>
  );
}




// Tela 1: Nome do Estabelecimento
function EstablishmentScreen({
  navigation,
  formMethods,
  route,
}: {
  navigation: any;
  formMethods: any;
  route: any;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  console.log("AQUI EU TENHO", route);
  const onSubmit = (data: any) => {
    navigation.navigate("Notifications", { ...data, ...route });
  };

  return (
    <View style={styles.container}>
      <View>
        <ProgressHeader progress={0.25} />

        <View>
          <Text style={styles.title}>
            Seja bem vindo <Text style={styles.highlight}>{route?.name}</Text>.
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
        <Button type="fill" size="large" onPress={handleSubmit(onSubmit)}>
          Continuar
        </Button>
      </View>
    </View>
  );
}

// Tela 2: Deseja receber notificações?
function NotificationsScreen({
  navigation,
  formMethods,
}: {
  navigation: any;
  formMethods: any;
}) {
  const [checked, setChecked] = useState("yes");
  const { setValue, handleSubmit } = formMethods;
  setValue("notifications", checked);
  const route = useRoute();
  const params = route.params;

  const onSubmit = (data: any) => {
    navigation.navigate("Expiration", { ...data, ...params });
  };

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
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioItem}
            onPress={() => setChecked("yes")}
          >
            <Image source={require("../../../assets/bell.png")} />
            <Text style={styles.radioItemText}>
              Sim, desejo receber notificações pelo{" "}
              <Text style={{ fontWeight: "bold" }}>aplicativo</Text>
            </Text>
            <RadioButton
              value="yes"
              status={checked === "yes" ? "checked" : "unchecked"}
              onPress={() => setChecked("yes")}
              color={colors.primary["600"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioItem}
            onPress={() => setChecked("not")}
          >
            <Image source={require("../../../assets/not-bell.png")} />
            <Text style={styles.radioItemText}>
              Não desejo receber notificações
            </Text>
            <RadioButton
              value="not"
              status={checked === "not" ? "checked" : "unchecked"}
              onPress={() => setChecked("not")}
              color={colors.primary["600"]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ gap: 16 }}>
        <Button type="fill" size="large" onPress={handleSubmit(onSubmit)}>
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
function ExpirationScreen({
  navigation,
  formMethods,
}: {
  navigation: any;
  formMethods: any;
}) {
  const [selected, setSelected] = useState("DAILY");
  const [customDays, setCustomDays] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const route = useRoute();
  const params = route.params;
  const onSubmit = (data: any) => {
    navigation.navigate("Loading", {
      amount: selected === NotificationTimeEnum.OTHER ? data.amount : selected,
      ...params,
    });
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
            NotificationTimeEnum.DAILY,
            NotificationTimeEnum.WEEKLY,
            NotificationTimeEnum.HALF_MONTHLY,
            NotificationTimeEnum.MONTHLY,
            NotificationTimeEnum.THIRTY_MONTHLY,
            NotificationTimeEnum.OTHER,
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
                onPress={() => setSelected(option)}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: colors.neutral["900"],
                  lineHeight: 24,
                  fontWeight: 500,
                }}
              >
                {labelNotificationTimeEnum[option as string] as any}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={Input.inputView}>
          <Text style={Input.label}>Outra quantidade? Digite abaixo</Text>
          <Controller
            control={control}
            rules={{
              required: selected === NotificationTimeEnum.OTHER,
            }}
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
          <Button type="fill" size="large" onPress={handleSubmit(onSubmit)}>
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
function LoadingScreen({ navigation, route }: { navigation: any; route: any }) {
  const { params } = route;
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const data = {
      organization_name: params?.storeName,
      isNotification: params?.notifications !== "not",
      notificationInterval: params?.amount,
      access_token: params?.access_token,
    };
    try {
      const dataRegister = await register(data).unwrap();
      const { accessToken, refreshToken } = dataRegister;
      await AsyncStorage.setItem("@vencify:token", accessToken);
      await AsyncStorage.setItem("@vencify:refresh_token", refreshToken);
      dispatch(setToken(accessToken));
      navigation.navigate("Home");
    } catch (error) {
      navigation.navigate("Login");
      return;
    }
  };

  useEffect(() => {
    onSubmit();
  }, []);

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
        <LottieView
          source={animation}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text style={styles.loadingText}>
          Tudo pronto! Estamos configurando sua conta...
        </Text>
      </View>
    </View>
  );
}

export default function InformationStore() {
  const formMethods = useForm();
  const route = useRoute();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Objective">
        {(props) => (
          <ObjectiveScreen
            {...props}
            formMethods={formMethods}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Establishment">
        {(props) => (
          <EstablishmentScreen
            {...props}
            formMethods={formMethods}
            route={route.params}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Notifications">
        {(props) => (
          <NotificationsScreen {...props} formMethods={formMethods} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Expiration">
        {(props) => <ExpirationScreen {...props} formMethods={formMethods} />}
      </Stack.Screen>
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
    marginTop: -50,
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
    lineHeight: 24,
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
  radioGroup: {},
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
   titleButton: {
    fontSize: 14,
    color: colors.neutral["900"],
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 20,
    
  },
   radioText: {
    fontSize: 14,
    fontStyle: "normal",
    color: colors.neutral["500"],
    lineHeight: 20,
    fontWeight: "normal", 
  },
  checked: {
    borderWidth: 2,
    borderColor: '#0891B2', 
    backgroundColor: '#FFF',
  },
  logo: {
    alignItems: "center",
    marginTop: 3,
    marginBottom: 32,
  },
});
