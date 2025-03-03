import React from "react";
import { Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


import { NavigationProp } from "@react-navigation/native";
import Button from "../../components/Button";
import { styles } from "./OnBoarding.style";
import { Image} from 'react-native';

interface ButtonsProps {
  navigation: NavigationProp<any>;
}

const OnboardingScreen = ({ navigation }: ButtonsProps) => {
  return (
    <>
        <View>
          <Image 
        source={require('../../../assets/init.png')} 
        style={styles.Image}
      />
          <View style={styles.divContent}>
            <Text style={styles.title}>
              Controle a validade {"\n"}dos seus produtos
            </Text>
            <Text style={styles.text}>
            O Expiral oferece controle preciso das datas {"\n"}de validade, com notificações e {"\n"}gerenciamento completo do seu estoque.
            </Text>
            </View>
          </View>
   

      <Buttons navigation={navigation} />
    </>
  );
};

const Buttons = ({ navigation }: ButtonsProps) => (
  <View style={styles.buttonContainer}>
    <Button
      onPress={() => navigation.navigate("Login")}
      variant="primary"
      type="fill"
      size="large"
      disabled={false}
    >
      Acessar minha conta
    </Button>
    <Button
      onPress={() => navigation.navigate("Register")}
      variant="primary"
      type="outlined"
      size="large"
      disabled={false}
    >
      Criar uma nova conta
    </Button>
  </View>
);

export default OnboardingScreen;
