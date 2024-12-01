import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import TrashIcon from "../../../../../../assets/icons/trash";

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
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
          <Text style={styles.text}>Código do produto: {product.code}</Text>
          <Text style={styles.text}>
            Data de validade: {product.expiryDate}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.quantity}>{product.quantity} itens</Text>
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
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    color: "#007f00",
    fontWeight: "bold",
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    color: "#666",
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
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductCard;
