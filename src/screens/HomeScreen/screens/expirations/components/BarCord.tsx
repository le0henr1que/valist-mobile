import { Audio } from "expo-av";
import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

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
        require("../../../../../../assets/144418__zerolagtime__store-scanner-beep.mp3") // Certifique-se de adicionar um arquivo "beep.mp3" na pasta `assets`.
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
    playSound(); // Toca o som do bip
    console.log(`Barcode type: ${type}, data: ${data}`);
    Alert.alert("Código de Barras Lido", `Tipo: ${type}\nCódigo: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Verificando permissões da câmera...</Text>;
  }

  if (hasPermission === false) {
    return (
      <Text>Sem acesso à câmera. Por favor, habilite nas configurações.</Text>
    );
  }

  return (
    <View style={styles.container}>
      {!scanned ? (
        <CameraView
          barcodeScannerSettings={{
            barcodeTypes: ["code128", "upc_a", "ean13"],
          }}
          style={styles.camera}
          onBarcodeScanned={(barcodeData) => handleBarCodeScanned(barcodeData)}
          onCameraReady={() => setCameraReady(true)}
        />
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
});
