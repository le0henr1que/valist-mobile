import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";

import { NavigationProp } from "@react-navigation/native";
import Button from "../../components/Button";
import { styles } from "./OnBoarding.style";

interface ButtonsProps {
  navigation: NavigationProp<any>;
}

const OnboardingScreen = ({ navigation }: ButtonsProps) => {
  return (
    <>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}
        loop={false}
      >
        <View style={styles.slide}>
          <View style={styles.divImage}>
            <Text>X</Text>
          </View>
          <View style={styles.divContent}>
            <Text style={styles.title}>
              Gerencie a validade dos seus produtos
            </Text>
            <Text style={styles.text}>
              Acompanhe a validade dos itens do seu estoque e evite
              desperdícios.
            </Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.divImage}>
            <Text>X</Text>
          </View>
          <View style={styles.divContent}>
            <Text style={styles.title}>Adicione produtos rapidamente </Text>
            <Text style={styles.text}>
              Escaneie códigos de barras ou adicione produtos manualmente para
              acompanhar a validade.
            </Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.divImage}>
            <Text>X</Text>
          </View>
          <View style={styles.divContent}>
            <Text style={styles.title}>Receba alertas de vencimento</Text>
            <Text style={styles.text}>
              Notificações automáticas para lembrar você dos produtos prestes a
              vencer
            </Text>
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.divImage}>
            <Text>X</Text>
          </View>
          <View style={styles.divContent}>
            <Text style={styles.title}>
              Gerencie produtos de múltiplas lojas
            </Text>
            <Text style={styles.text}>
              Adicione e acompanhe o estoque de diversas lojas de forma
              centralizada. Tudo na palma da sua mão
            </Text>
          </View>
        </View>
      </Swiper>
      <Buttons navigation={navigation} />
    </>
  );
};

const Buttons = ({ navigation }: ButtonsProps) => (
  <View style={styles.buttonContainer}>
    <Button
      title="Acessar minha conta"
      onPress={() => navigation.navigate("Login")}
      variant="primary"
      type="fill"
      size="large"
      disabled={false}
    />
    <Button
      title="Criar uma nova conta"
      onPress={() => navigation.navigate("Details")}
      variant="primary"
      type="outlined"
      size="large"
      disabled={false}
    />
  </View>
);

export default OnboardingScreen;
