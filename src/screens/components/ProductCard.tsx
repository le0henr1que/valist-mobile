import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DotsVertical from "../../../assets/icons/dots-vertical";
import ScamBarIcon from "../../../assets/icons/scam-bar";
import TrashIcon from "../../../assets/icons/trash";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../HomeScreen";
import CardAction from "./CardProductAction";
import Ionicons from "react-native-vector-icons/Ionicons";
import { typography } from "../../styles/typography";

const ProductCard = ({ product }: any) => {
  const { handleModal } = useDialogModal();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePressProductCard = () => {
    console.log("Produto clicado");
    navigation.navigate("ViewProduct");
  };

  const handlePress = () => {
    handleModal({
      isOpen: true,
      element: <CardAction navigation={navigation} />,
    });
  };
  return (
    <>
      <TouchableOpacity>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => handlePress()} style={styles.header}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="trash"
                size={16}
                color={colors.white}
                style={{ marginLeft: 8 }}
              />
              <Text style={styles.expiredText}>
                VENCIDO HÁ {product.expiredDays || 0} DIAS
              </Text>
            </View>
            <TouchableOpacity onPress={() => handlePress()}>
              <DotsVertical />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressProductCard()}>
            <View style={styles.body}>
              <Image source={{ uri: product.image }} style={styles.image} />
              <View style={styles.details}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={styles.title}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {product.name}
                  </Text>
                  <Text style={styles.price}>R$ {product.price}</Text>
                </View>
                <Text style={styles.text}>
                  Código do produto:{" "}
                  <Text style={styles.text2}>{product.code}</Text>
                </Text>
                <Text style={styles.text}>
                  Data de validade:{" "}
                  <Text style={styles.text2}>{product.expiryDate}</Text>
                </Text>
                <Text style={styles.text}>
                  Local: <Text style={styles.text2}>Prateleira K12</Text>
                </Text>
              </View>
            </View>
            <View style={styles.footer}>
              <View
                style={{
                  display: "flex",
                  gap: 4,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ScamBarIcon color={colors.primary["600"]} />
                <Text style={styles.quantity}>{product.quantity} itens</Text>
              </View>
              <Text style={styles.category}>{product.category}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    backgroundColor: colors.danger["600"],
    paddingVertical: 4,
    paddingHorizontal: 8,
    display: "flex",
    gap: 6,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  expiredText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: typography.fontFamily.semibold,
  },
  body: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    gap: 4,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    width: "85%",
    lineHeight: 20,
    fontFamily: typography.fontFamily.semibold,
    flex: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  price: {
    color: colors.primary["600"],
    fontFamily: typography.fontFamily.semibold,
    lineHeight: 20,
    marginVertical: 5,
    width: "30%",
    marginTop: -0.4,
    textAlign: "right",
  },
  text: {
    fontSize: 12,
    color: colors.neutral["600"],
    fontFamily: typography.fontFamily.medium,
    lineHeight: 16,
  },
  text2: {
    color: colors.neutral["950"],
    fontFamily: typography.fontFamily.semibold,
    fontSize: 12,
    lineHeight: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  quantity: {
    fontFamily: typography.fontFamily.semibold,
    color: colors.primary["600"],
  },
  category: {
    fontSize: 12,
    fontFamily: typography.fontFamily.semibold,
    backgroundColor: colors.neutral["100"],
    paddingVertical: 2,
    paddingHorizontal: 12,
    color: colors.neutral["900"],
    borderRadius: 4,
  },
});

export default ProductCard;
