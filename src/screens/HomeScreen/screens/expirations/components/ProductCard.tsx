import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import TrashIcon from "../../../../../../assets/icons/trash";
import ScamBarIcon from "../../../../../../assets/icons/scam-bar";
import { colors } from "../../../../../styles/colors";

const ProductCard = ({ product }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TrashIcon />
        <Text style={styles.expiredText}>
          VENCIDO HÁ {product.expiredDays} DIAS
        </Text>
      </View>
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
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {product.name}
            </Text>
            <Text style={styles.price}>R$ {product.price}</Text>
          </View>
          <Text style={styles.text}>
            Código do produto:{" "}
            <Text style={{ color: colors.neutral["900"] }}>{product.code}</Text>
          </Text>
          <Text style={styles.text}>
            Data de validade: {product.expiryDate}
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
          <ScamBarIcon color={"#0D9488"} />
          <Text style={styles.quantity}>{product.quantity} itens</Text>
        </View>
        <Text style={styles.category}>{product.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "#f44",
    padding: 10,
    display: "flex",
    gap: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  expiredText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    width: "85%",
  },
  price: {
    color: "#007f00",
    fontWeight: "bold",
    marginVertical: 5,
    width: "15%",
  },
  text: {
    fontSize: 14,
    color: colors.neutral["600"],
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  quantity: {
    fontWeight: "bold",
    color: "#0D9488",
  },
  category: {
    fontSize: 14,
    backgroundColor: colors.neutral["100"],
    paddingVertical: 2,
    paddingHorizontal: 12,
    color: colors.neutral["900"],
    borderRadius: 4,
  },
});

export default ProductCard;
