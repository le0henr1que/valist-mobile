import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useMeQuery } from "../../../services/me";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { CameraPermission } from "../../../components/CameraPermission/Index";
import { useProductFilterActions } from "../ducks/filter/hooks/actions";

export default function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { updateFilter } = useProductFilterActions();
  const handleImageSelected = (uri: string | null) => {
    updateFilter({ key: "imageUri", value: uri });
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          onPress={() => {
            updateFilter({ key: "imageUri", value: null });
            navigation.goBack();
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={24} color="#343330" />
        </TouchableOpacity>

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
            Adicionar produto
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <CameraPermission onImageSelected={handleImageSelected}>
          <Ionicons name="camera-outline" size={24} color="#343330" />
        </CameraPermission>
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
    padding: 20,

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
  icon: {
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: colors.neutral["100"],
    borderRadius: 22.5,
    alignItems: "center",
    display: "flex",
  },
});
