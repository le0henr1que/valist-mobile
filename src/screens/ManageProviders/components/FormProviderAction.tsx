import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../../../components/Input/Input.style";
import Button from "../../../components/Button";

export const FormProviderAction = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.formContainer}>
        <View style={styles.formContainerLine}>
          <View style={Input.inputView}>
            <Text style={Input.label}>Nome do produto</Text>
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
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formContainerLine}>
          <View style={Input.inputView}>
            <Text style={Input.label}>Nome do produto</Text>
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
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ width: "100%", flex: 1 }}>
          <Button variant="neutral" onPress={() => console.log("cancelar")}>
            Cancelar
          </Button>
        </View>
        <View style={{ width: "100%", flex: 1.5 }}>
          <Button onPress={handleSubmit(onSubmit)}>Adicionar</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 8,
  },
  scrollViewContent: {},
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
    gap: 12,
    paddingHorizontal: 20,
  },
  insideContainer: {
    padding: 15,

    flex: 1,
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
