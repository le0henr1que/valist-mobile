import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors'; // Ajuste o caminho conforme necessário

const NotPass = ({ navigation }: any) => {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Sua senha foi resetada com sucesso!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    height: 275,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary['600'],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10, 
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  titleStyle: {
    color: "#333",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
  },
  containerText: {
    display: "flex",
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    height: 76,
    borderBottomColor: "#DEDEDE",
    borderBottomWidth: 1,
  },

  overlay: {
    zIndex: 1000,
    elevation: 1000,
  },
    title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default NotPass;
