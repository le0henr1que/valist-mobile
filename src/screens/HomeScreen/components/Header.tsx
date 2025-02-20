import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoIcon from "../../../../assets/icons/logo";
import InformationIcon from "../../../../assets/icons/information";
import BellIcon from "../../../../assets/icons/bell";
import { colors } from "../../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "..";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userMe from "../../../hook/user";
import { useMeQuery } from "../../../services/me";
import { Ionicons } from 'react-native-vector-icons';
import { typography } from "../../../styles/typography";

export default function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const notificationCount = 1;
  // const user = userMe();
  const { data: user } = useMeQuery();
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text
          style={{
            color: colors.neutral["900"],
            fontSize: 16,
            fontWeight: "600",
            fontFamily: typography.fontFamily.semibold,
            lineHeight: 24,
          }}
        >
          Olá, {user?.name}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Ionicons name="help-circle-outline" size={24} color="#343330" style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Ionicons name="notifications-outline" size={24} color="#343330" style={styles.icon} />

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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 96,
    padding: 20,
    paddingTop: 55,
    width: "100%",
    borderBottomColor: colors.neutral["200"],
    borderBottomWidth: 1,
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
  icon:{
    width:40,
    height:40,
    padding:8,
    backgroundColor: colors.neutral["100"],
    borderRadius: 22.5,
    alignItems:"center",
    display:"flex",
  },
});
