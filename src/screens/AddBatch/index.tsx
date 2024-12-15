import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../HomeScreen";
import Button from "../../components/Button";
import ScamBarIcon from "../../../assets/icons/scam-bar";
import { colors } from "../../styles/colors";
import CardWatingDate from "./components/card-wating-date";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input.style";
import { TextInput } from "react-native-gesture-handler";
import useHideTabBar from "../../utils/useHideTabBar";

function AddBatch() {
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
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <CardWatingDate />
        <View style={styles.formContainer}>
          <View style={styles.formContainerLine}>
            <View style={(Input.inputView, styles.inputWrapper)}>
              <Text style={Input.label}>Lote</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.batch ? Input.styleError : Input.style}
                    placeholder="Ex: 100"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="batch"
              />
              {errors.name && (
                <Text style={Input.errorText}>Lote é obrigatório</Text>
              )}
            </View>
            <View style={(Input.inputView, styles.inputWrapper)}>
              <Text style={Input.label}>Quantidade de itens</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.qtdItems ? Input.styleError : Input.style}
                    placeholder="Ex: 12"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="qtdItems"
              />
              {errors.name && (
                <Text style={Input.errorText}>
                  Qauntidade de items é obrigatório.
                </Text>
              )}
            </View>
          </View>
          <View style={styles.formContainerLine}>
            <View style={(Input.inputView, styles.inputWrapper)}>
              <Text style={Input.label}>Preço (Unitário)</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.price ? Input.styleError : Input.style}
                    placeholder="R$ 20,00"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="price"
              />
              {errors.name && (
                <Text style={Input.errorText}>Lote é obrigatório</Text>
              )}
            </View>
          </View>
          <View style={styles.formContainerLine}>
            <View style={(Input.inputView, styles.inputWrapper)}>
              <Text style={Input.label}>Data de validade</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.validate ? Input.styleError : Input.style}
                    placeholder="Ex: 12/12/2012"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="validate"
              />
              {errors.name && (
                <Text style={Input.errorText}>Lote é obrigatório</Text>
              )}
            </View>
          </View>
          <View style={styles.formContainerLine}>
            <View style={(Input.inputView, styles.inputWrapper)}>
              <Text style={Input.label}>Fornecedor</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.supplier ? Input.styleError : Input.style}
                    placeholder="Selecione o fornecedor"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="supplier"
              />
              {errors.name && (
                <Text style={Input.errorText}>Lote é obrigatório</Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerButtom}>
        <Button onPress={() => navigation.navigate("Home")}>Salvar</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
    gap: 12,
  },
  insideContainer: {
    padding: 15,
  },
  footerButtom: {
    display: "flex",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#FFF",
    boxShadow: "0px -4px 12px 0px rgba(151, 151, 151, 0.15)",
  },
  formContainerLine: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  inputWrapper: {
    flex: 1,
  },
});

export default AddBatch;
