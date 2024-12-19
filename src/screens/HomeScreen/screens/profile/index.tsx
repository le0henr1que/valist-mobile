import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

function Profile() {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>My Store</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Profile;
