import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import { colors } from "../../styles/colors";
import { Input } from "../../components/Input/Input.style";
import { useMeQuery, useUpdateUserMutation } from "../../services/me";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDialogNotification } from "../../hook/notification/hooks/actions";
import { useDispatch } from "react-redux";

export default function PersonInformation() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const { data: user } = useMeQuery();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    (async () => {
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      const galleryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraPermission.status === "granted" &&
        galleryPermission.status === "granted"
      ) {
        setHasPermission(true);
      } else {
        Alert.alert(
          "Permissões necessárias",
          "Precisamos de permissões para acessar a câmera e galeria."
        );
      }
    })();
  }, []);

  const handleCameraOrGallery = () => {
    Alert.alert("Selecionar imagem", "Escolha uma opção:", [
      {
        text: "Tirar Foto",
        onPress: () => openCamera(),
      },
      {
        text: "Selecionar da Galeria",
        onPress: () => openGallery(),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  const openCamera = async () => {
    if (!hasPermission) {
      Alert.alert("Erro", "Permissões não concedidas.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    if (!hasPermission) {
      Alert.alert("Erro", "Permissões não concedidas.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { handleNotification } = useDialogNotification();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    // if (!imageUri) {
    //   Alert.alert("Erro", "Por favor, selecione ou tire uma foto.");
    //   return;
    // }

    // Criar FormData com a imagem
    const formData = new FormData();
    if (imageUri) {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      formData.append("image", blob, "photo.jpg");
    }
    try {
      const updatedUser = await updateUser({
        name: data.username,
        whatsapp_number: data.whatsapp,
        phone_number: data.phone,
        id: user?.id,
        version: user?.version,
      }).unwrap();
      dispatch({
        type: "UPDATE_USER",
        payload: updatedUser,
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
      handleNotification({
        isOpen: true,
        variant: "error",
        title: "Falha ao atualizar os dados",
        message:
          "Ocorreu um erro ao tentar atualizar os dados. Tente novamente mais tarde.",
      });
    }

    // // Adicionar outros campos do formulário
    // formData.append("username", data.username);
    // formData.append("whatsapp", data.whatsapp);
    // formData.append("phone", data.phone);

    // console.log("FormData criado:", formData);
    // Aqui você pode enviar o FormData para sua API
  };

  useEffect(() => {
    console.log("Usuário logado:", user);
    setValue("username", user?.name);
    setValue("email", user?.email);
    setValue("whatsapp", user?.whatsapp_number);
    setValue("phone", user?.phone_number);
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <View>
          <View style={styles.bannerContainer}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{
                  uri: imageUri || "https://via.placeholder.com/100",
                }}
                style={styles.avatar}
              />
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={handleCameraOrGallery}
              >
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Nome do usuário</Text>
              <Controller
                control={control}
                rules={{ required: "Nome é obrigatório" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.username ? Input.styleError : Input.style}
                    placeholder="Digite seu nome"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="username"
              />
              {errors.username && (
                <Text style={styles.errorText}>
                  {errors.username?.message?.toString()}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <Controller
                control={control}
                rules={{ required: "Email é obrigatório" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.email ? Input.styleError : Input.style}
                    placeholder="Ex: 987654321"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={styles.errorText}>
                  {errors.email?.message?.toString()}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Número (Whatsapp)</Text>
              <Controller
                control={control}
                rules={{ required: "Número é obrigatório" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.whatsapp ? Input.styleError : Input.style}
                    placeholder="Ex: 1199999999"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="whatsapp"
              />
              {errors.whatsapp && (
                <Text style={styles.errorText}>
                  {errors.whatsapp.message?.toString()}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Número de telefone</Text>
              <Controller
                control={control}
                rules={{ required: "Número é obrigatório" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={errors.phone ? Input.styleError : Input.style}
                    placeholder="Ex: 987654321"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="phone"
              />
              {errors.phone && (
                <Text style={styles.errorText}>
                  {errors.phone?.message?.toString()}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.footerButtom}>
          <Button onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
            Salvar dados
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  bannerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatarWrapper: {},
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
    flexShrink: 0,
  },
  cameraButton: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: colors.primary["500"],
    borderRadius: 20,
    padding: 5,
  },
  form: {
    marginTop: 20,
    width: 344,
    height: 281,
    gap: 12,
    flexShrink: 0,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
    lineHeight: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  footerButtom: {
    padding: 20,
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#FFF",
    boxShadow: "0px -4px 12px 0px rgba(151, 151, 151, 0.15)",
  },
});
