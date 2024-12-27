import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import { colors } from "../../styles/colors";
import Button from "../../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input.style";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as Camera from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function PersonInformation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [hasGalleryPermission, setHasGalleryPermission] =
    useState<boolean>(false);

  // Usando os hooks de permissões do Expo
  const cameraStatus = Camera.useCameraPermissions();
  console.log("Permissão da câmera:", cameraStatus[0]?.granted);
  const [galleryStatus, setGalleryStatus] =
    useState<MediaLibrary.PermissionStatus | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      console.log("Permissão da galeria:", status);
      setGalleryStatus(status);
    })();
  }, []);

  useEffect(() => {
    console.log(cameraStatus);
    if (cameraStatus[0]?.granted && galleryStatus === "granted") {
      setHasCameraPermission(true);
      setHasGalleryPermission(true);
    } else {
      setHasCameraPermission(false);
      setHasGalleryPermission(false);
      Alert.alert(
        "Permissões necessárias",
        "Precisamos de permissões de câmera e galeria para continuar."
      );
    }
  }, [cameraStatus, galleryStatus]);

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

  const openCamera = () => {
    console.log(hasCameraPermission);
    if (hasCameraPermission) {
      launchCamera(
        {
          mediaType: "photo",
          cameraType: "back",
        },
        (response) => {
          if (response.didCancel) {
            console.log("Usuário cancelou a câmera.");
          } else if (response.errorCode) {
            console.log("Erro ao abrir câmera:", response.errorMessage);
          } else {
            console.log("Imagem capturada:", response.assets[0].uri);
          }
        }
      );
    }
  };

  const openGallery = () => {
    console.log(hasCameraPermission);
    if (hasGalleryPermission) {
      const options = {
        mediaType: "photo", // Tipo de mídia (foto)
        selectionLimit: 1, // Limitar a 1 imagem
        includeBase64: false, // Se deve incluir a imagem codificada em base64
      };

      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log("Usuário cancelou a seleção");
        } else if (response.errorCode) {
          console.log("Erro ao selecionar a imagem: ", response.errorMessage);
        } else {
          console.log("Imagem selecionada: ", response.assets[0]);
          // Aqui você pode fazer algo com a imagem selecionada, como enviá-la para o backend
        }
      });
    }
  };

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
        <View style={styles.bannerContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              style={styles.avatar}
            />
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={handleCameraOrGallery}
            >
              <Image
                source={{ uri: "https://via.placeholder.com/30" }}
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          <View style={Input.inputView}>
            <Text style={Input.label}>Nome do usuário</Text>
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
          <View style={Input.inputView}>
            <Text style={Input.label}>Número do Whatsapp</Text>
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
          <View style={Input.inputView}>
            <Text style={Input.label}>Número de telefone</Text>
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
      </View>
      {/* Botão */}
      <View style={styles.footerButtom}>
        <Button onPress={() => navigation.navigate("Home")}>
          Salvar dados
        </Button>
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
  bannerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  avatarWrapper: {},
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#fff",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: colors.primary["500"],
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    width: 20,
    height: 20,
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
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: colors.neutral["600"],
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.neutral["300"],
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral["300"],
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: colors.primary["500"],
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
