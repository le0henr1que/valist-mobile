import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import CustomSwitch from "../../components/Switch";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Plan } from "../../enum/plan";
import PlanCard from "./components/PlanCard";
import { useMeQuery } from "../../services/me";
import { styles } from "./styles";
import { useSubscriptionQuery } from "../../services/subscription";

export default function PlansManager() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { data: user } = useMeQuery();
  const { name, buttonText } = user?.subscription?.plan;
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
      {/* Banner e Avatar */}
      <View>
        {/* Formulário */}
        <View style={styles.form}>
          <PlanCard variant={name ?? Plan.FREE} />
          <View>
            <View>
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "600",
                  lineHeight: 24,
                  marginTop: 20,
                }}
              >
                O seu plano inclui:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 28 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="checkmark"
                  size={24}
                  color={colors.primary["500"]}
                />
                <Text>Cadastrar até 100 produtos</Text>
              </View>
            </View>
            <View style={{ marginTop: 11 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="close-sharp"
                  size={24}
                  color={colors.danger["600"]}
                />
                <Text>Cadastrar até 100 produtos</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Botão */}
      <View style={styles.footerButtom}>
        <Button
          style={{
            backgroundColor: "#E8CC3C",
            borderRadius: 8,
            padding: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 48,
          }}
          onPress={() => navigation.navigate("PlanPremium")}
        >
          {buttonText}
        </Button>
      </View>
    </View>
  );
}
