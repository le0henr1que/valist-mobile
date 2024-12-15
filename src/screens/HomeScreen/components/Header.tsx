import { StyleSheet, Text, View } from "react-native";
import LogoIcon from "../../../../assets/icons/logo";
import InformationIcon from "../../../../assets/icons/information";
import BellIcon from "../../../../assets/icons/bell";
import { colors } from "../../../styles/colors";

export default function Header() {
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
        <BellIcon size={40} />
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
});
