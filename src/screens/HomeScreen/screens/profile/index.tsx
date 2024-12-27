import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../..";
import BellIcon from "../../../../../assets/icons/bell";
import InformationIcon from "../../../../../assets/icons/information";
import { colors } from "../../../../styles/colors";
import Button from "../../../../components/Button";

function Profile() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const notificationCount = 1;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../../assets/background.png")}
        style={styles.banner}
        resizeMode="contain"
        resizeMethod="auto"
        imageStyle={{ left: 140 }}
      >
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <View style={styles.header}>
            <Image
              source={require("../../../../../assets/logo-white.png")}
              style={styles.logoWhite}
            />
            <View style={styles.iconsHeader}>
              <InformationIcon size={40} />
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <BellIcon size={40} color="black" />

                {notificationCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {notificationCount > 99 ? "99+" : notificationCount}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.avatarContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}
            >
              <Image
                source={require("../../../../../assets/profile.png")}
                style={styles.image}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: -10,
                  alignSelf: "center",
                  padding: 4,
                  borderRadius: 4,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    color: colors.primary["600"],
                    fontSize: 12,
                    fontWeight: "700",
                    lineHeight: 16,
                    textAlign: "center",
                  }}
                >
                  FREE
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  fontWeight: "600",
                  lineHeight: 28,
                  textAlign: "left",
                }}
              >
                Bruninho do grau
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Administrador
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", padding: 20 }}>
            <View style={styles.premium}>
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 14,
                  fontWeight: "700",
                  lineHeight: 20,
                  textAlign: "left",
                }}
              >
                Seja Premiume
              </Text>
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 12,
                  fontWeight: "500",
                  lineHeight: 20,
                  textAlign: "left",
                }}
              >
                Desbloqueie diversas funcionalidades para o seu app com nosso
                plano pago.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.containerOptions}>
        <Text
          style={{
            color: colors.neutral["500"],
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            textAlign: "left",
            marginBottom: 12,
          }}
        >
          Configurações da conta
        </Text>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("PersonInformation")}
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Informações Pessoais
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("ModifyPassword")}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Alterar Senha
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("PlansManager")}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="medal-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Minhas assinaturas
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("ManageNotifications")}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Notificações
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: colors.neutral["500"],
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 24,
                textAlign: "left",
                marginBottom: 12,
              }}
            >
              Suporte
            </Text>
          </View>

          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("FAQ")}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="help-circle-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Central de ajuda
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Termos de uso
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="share-social-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Compartilhe com um amigo
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="star-outline"
                size={24}
                color={colors.neutral["900"]}
              />
              <Text
                style={{
                  color: colors.neutral["900"],
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  textAlign: "left",
                }}
              >
                Avalie nosso app
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.neutral["500"]}
            />
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.neutral["500"],
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                textAlign: "left",
                marginBottom: 12,
              }}
            >
              Versão 1.2.3 (3232832893298)
            </Text>
          </View>
          <Button
            variant="neutral"
            size="medium"
            onPress={() => navigation.navigate("Login")}
          >
            Sair do Aplicativo
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  avatarContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    gap: 13,
  },
  premium: {
    marginTop: 20,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#E8CC3C",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOptions: {
    flex: 1.1,
    backgroundColor: "#fff",
    borderRadius: 24,
    width: "100%",
    marginTop: -20,
    padding: 20,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    right: 0,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    height: 20,
    minWidth: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    zIndex: 1,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  banner: {
    width: "100%",
    // height: 200,
    flex: 1,
    backgroundColor: colors.primary["700"],
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    width: "100%",
  },
  logoWhite: {
    height: 40,
    resizeMode: "contain",
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
});
export default Profile;
