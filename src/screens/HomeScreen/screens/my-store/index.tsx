import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import InformationIcon from "../../../../../assets/icons/information";
import BellIcon from "../../../../../assets/icons/bell";
import BoxIcon from "../../../../../assets/icons/box-icon";
import CrashIcon from "../../../../../assets/icons/crash-icon";
import DangerIcon from "../../../../../assets/icons/danger-icon";
import PersonIcon from "../../../../../assets/icons/person-icon";
import { colors } from "../../../../styles/colors";
import StoreIcon from "../../../../../assets/icons/store-icon";
import PencilIcon from "../../../../../assets/icons/pencil-icon";
import PersonQIcon from "../../../../../assets/icons/person-q-icon";
import TruckIcon from "../../../../../assets/icons/truck-icon";
import ReportIcon from "../../../../../assets/icons/report-icon";
import TrashQIcon from "../../../../../assets/icons/trash-q-icon";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";

const Avatar = ({ uri }) => (
  <View style={styles.avatarContainer}>
    <Image source={{ uri }} style={styles.avatar} />
  </View>
);

const InfoCard = ({ title, value, Icon }) => (
  <View style={styles.card}>
    <Text style={styles.titleCard}>{title}</Text>
    <View style={styles.cardContent}>
      <Icon />
      <Text style={styles.valueCard}>{value}</Text>
    </View>
  </View>
);

const StoreInformation = () => (
  <View style={styles.information}>
    <View style={styles.informationHeader}>
      <View>
        <Text style={styles.title1}>Você está em:</Text>
        <Text style={styles.title2}>Clóvis mercadiho</Text>
        <Text style={styles.title3}>Rua Pelicano, 13, Jardim Aliança</Text>
      </View>
      <Avatar uri="https://via.placeholder.com/150" />
    </View>
    <View style={styles.informationContent}>
      <View style={styles.contentRow}>
        <InfoCard title="Total de produtos" value="1.000" Icon={BoxIcon} />
        <InfoCard title="Vencidos" value="1.000" Icon={CrashIcon} />
      </View>
      <View style={styles.contentRow}>
        <InfoCard title="Próximos de vencer" value="1.000" Icon={DangerIcon} />
        <InfoCard title="Membros da loja" value="1.000" Icon={PersonIcon} />
      </View>
    </View>
  </View>
);

const options = [
  {
    title: "Editar dados",
    description: "Atualize os dados da sua loja",
    icon: <PencilIcon />,
    isPro: true,
    redirectTo: "EditStore",
  },
  {
    title: "Gerenciar Lojas",
    description: "Crie novas lojas e alterne entre elas",
    icon: <StoreIcon />,
    isPro: false,
    redirectTo: "ManageStores",
  },
  {
    title: "Gerenciar membros",
    description: "Adicione membros as suas lojas",
    icon: <PersonQIcon />,
    isPro: false,
    redirectTo: "ManageMembers",
  },
  {
    title: "Gerenciar fornecedores",
    description: "Adicione fornecedores em cada loja",
    icon: <TruckIcon />,
    isPro: false,
    redirectTo: "ManageProviders",
  },
  {
    title: "Exportar relatórios",
    description: "Exporte relatórios detalhados da sua loja",
    icon: <ReportIcon />,
    isPro: true,
    redirectTo: "ExportReport",
  },
  {
    title: "Excluir loja",
    description: "Apagar todos os dados dessa loja",
    icon: <TrashQIcon />,
    isPro: true,
    redirectTo: "DeleteStore",
  },
];
const StoreOptions = ({ options }: any) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardOptions}
      onPress={() => navigate.navigate(options.redirectTo)}
    >
      {options.icon}
      <View>
        <View style={styles.cardOptionsTitle}>
          <Text style={styles.cardOptionsTextTitle}>{options?.title}</Text>
          {options.isPro && (
            <View style={styles.badgePro}>
              <Text style={styles.badgeProTitle}>PRO</Text>
            </View>
          )}
        </View>
        <Text style={styles.cardOptionsTextDescription}>
          {options?.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MyStore = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const notificationCount = 1;
  return (
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
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.containerInformations}>
        <StoreInformation />
      </View>
      <View style={styles.containerOptions}>
        <Text style={styles.titleOptions}>Serviços</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {options.map((item) => {
            return <StoreOptions key={item.title} options={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badgePro: {
    display: "flex",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9B600",
    borderRadius: 4,
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
  badgeProTitle: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 16,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  cardOptionsTitle: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  cardOptionsTextTitle: {
    color: colors.neutral["900"],
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  cardOptionsTextDescription: {
    color: colors.neutral["500"],
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  titleOptions: {
    color: colors.neutral["700"],
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  containerOptions: { paddingHorizontal: 20, flex: 1 },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
  logoWhite: {
    height: 40,
    resizeMode: "contain",
  },
  containerInformations: {
    padding: 20,
    width: "100%",
  },
  information: {
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
    height: 275,
    alignSelf: "stretch",
  },
  informationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  informationContent: {
    gap: 12,
    marginTop: 12,
    alignItems: "center",
    width: "100%",
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral["200"],
  },
  cardOptions: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  titleCard: {
    color: colors.neutral["500"],
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
  valueCard: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  title1: {
    color: colors.primary["700"],
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  title2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  title3: {
    color: colors.neutral["600"],
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
});

export default MyStore;
