import { Audio } from "expo-av";
import { Camera, CameraView } from "expo-camera";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import animation from "../../../../../../assets/lotload.json";
import BackIconcon from "../../../../../../assets/icons/backIcon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../..";

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../../../../assets/144418__zerolagtime__store-scanner-beep.mp3")
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      await sound.replayAsync();
    }
  };

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    playSound();
    console.log(`Barcode type: ${type}, data: ${data}`);
    Alert.alert("Código de Barras Lido", `Tipo: ${type}\nCódigo: ${data}`);
  };

  if (hasPermission === null) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={animation}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <Text>Sem acesso à câmera. Por favor, habilite nas configurações.</Text>
    );
  }
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {!scanned ? (
        <View style={styles.cameraContainer}>
          <View style={styles.overlayTop}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIconcon size={24} color="white" />
              </TouchableOpacity>
              <Text>Digitalizar código de barras</Text>
            </View>
          </View>

          <CameraView
            barcodeScannerSettings={{
              barcodeTypes: ["code128", "upc_a", "ean13"],
            }}
            style={styles.camera}
            onBarcodeScanned={(barcodeData) =>
              handleBarCodeScanned(barcodeData)
            }
            onCameraReady={() => setCameraReady(true)}
          />
          <View style={styles.overlayBottom} />
        </View>
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            Código de barras lido! Verifique o log para mais detalhes.
          </Text>
          <Button
            title="Escanear Novamente"
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  overlayBottom: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  messageContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  cameraContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlayTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
});
