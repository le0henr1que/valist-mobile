import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../components/Header";
import InformationIcon from "../../../../../assets/icons/information";
import BellIcon from "../../../../../assets/icons/bell";
import { colors } from "../../../../styles/colors";

function MyStore() {
  return (
    <View>
      {/* <Header /> */}
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../../../assets/banner.png")}
          style={styles.banner}
          resizeMode="cover"
        >
          <SafeAreaView>
            <View style={styles.header}>
              <Image
                source={require("../../../../../assets/logo-white.png")}
                style={styles.logoWhite}
              />
              <View style={styles.iconsHeader}>
                <View>
                  <InformationIcon />
                </View>
                <View>
                  <BellIcon />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        {/* Virar component */}
        <View style={styles.containerInformations}>
          <View style={styles.information}>
            <View style={styles.informationHeader}>
              <View>
                <Text>Você está em:</Text>
                <Text>Clóvis mercadiho</Text>
                <Text>Rua Pelicano, 13, Jardim Aliança</Text>
              </View>
              <View>
                <View style={styles.avatarContainer}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/150" }} // URL da imagem do avatar
                    style={styles.avatar}
                  />
                </View>
              </View>
            </View>
            <View style={styles.informationContent}>
              <View style={styles.contentRow}>
                <View style={styles.card}>
                  <Text>Total de produtos</Text>
                  <Text>1.000</Text>
                </View>
                <View style={styles.card}>
                  <Text>Vencidos</Text>
                  <Text>1.000</Text>
                </View>
              </View>
              <View style={styles.contentRow}>
                <View style={styles.card}>
                  <Text>Próximos de vencer</Text>
                  <Text>1.000</Text>
                </View>
                <View style={styles.card}>
                  <Text>Membros da loja</Text>
                  <Text>1.000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* VIrar component: */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral["200"],
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
  informationContent: {
    display: "flex",
    gap: 12,
    marginTop: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerInformations: { padding: 20, width: "100%" },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  informationHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  information: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
    marginTop: -80,
    height: 255,
    alignSelf: "stretch",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
  logoWhite: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
});
export default MyStore;
