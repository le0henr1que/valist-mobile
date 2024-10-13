import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { NavigationProp } from "@react-navigation/native";

interface ButtonsProps {
  navigation: NavigationProp<any>;
}

const OnboardingScreen = ({ navigation }: ButtonsProps) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      // paginationStyle={styles.pagination}
      loop={false}
    >
      {/* Tela 1 */}
      <View style={styles.slide}>
        <View style={styles.divImage}>
          <Text>X</Text>
          {/* <Image source={require("../../assets/ex.svg")} style={styles.image} /> */}
        </View>
        <View style={styles.divContent}>
          <Text style={styles.title}>
            Gerencie a validade dos seus produtos
          </Text>
          <Text style={styles.text}>
            Acompanhe a validade dos itens do seu estoque e evite desperdícios.
          </Text>
          <Buttons navigation={navigation} />
        </View>
      </View>

      {/* Tela 2 */}
      <View style={styles.slide}>
        <View style={styles.divImage}>
          <Text>X</Text>
          {/* <Image source={require("../../assets/ex.svg")} style={styles.image} /> */}
        </View>
        <View style={styles.divContent}>
          <Text style={styles.title}>
            Gerencie a validade dos seus produtos
          </Text>
          <Text style={styles.text}>
            Acompanhe a validade dos itens do seu estoque e evite desperdícios.
          </Text>
          <Buttons navigation={navigation} />
        </View>
      </View>

      {/* Tela 3 */}
      <View style={styles.slide}>
        <View style={styles.divImage}>
          <Text>X</Text>
          {/* <Image source={require("../../assets/ex.svg")} style={styles.image} /> */}
        </View>
        <View style={styles.divContent}>
          <Text style={styles.title}>
            Gerencie a validade dos seus produtos
          </Text>
          <Text style={styles.text}>
            Acompanhe a validade dos itens do seu estoque e evite desperdícios.
          </Text>
          <Buttons navigation={navigation} />
        </View>
      </View>
      {/* Tela 4 */}
      <View style={styles.slide}>
        <View style={styles.divImage}>
          <Text>X</Text>
          {/* <Image source={require("../../assets/ex.svg")} style={styles.image} /> */}
        </View>
        <View style={styles.divContent}>
          <Text style={styles.title}>
            Gerencie a validade dos seus produtos
          </Text>
          <Text style={styles.text}>
            Acompanhe a validade dos itens do seu estoque e evite desperdícios.
          </Text>
          <Buttons navigation={navigation} />
        </View>
      </View>
    </Swiper>
  );
};

const Buttons = ({ navigation }: ButtonsProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.primaryButton}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.buttonText}>Acessar minha conta</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.secondaryButton}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.secondaryButtonText}>Criar uma nova conta</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
  },
  divImage: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  divContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#008000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  secondaryButton: {
    borderColor: "#008000",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  secondaryButtonText: {
    color: "#008000",
    fontSize: 16,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#008000",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  // pagination: {
  //   bottom: "auto",
  //   top: 80,
  //   right: 300,
  // },
});

export default OnboardingScreen;
