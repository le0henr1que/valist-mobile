import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoIcon from "../../../../assets/icons/logo";
import InformationIcon from "../../../../assets/icons/information";
import BellIcon from "../../../../assets/icons/bell";
import { colors } from "../../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "..";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const notificationCount = 1;
  return (
    <View style={styles.container}>
      <View style={{ padding: 0 }}>
        <LogoIcon />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <InformationIcon size={40} />
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 76,
    padding: 20,
    paddingTop: 40,
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
});
