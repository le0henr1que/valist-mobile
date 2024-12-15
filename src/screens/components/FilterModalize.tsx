// src/screens/HomeScreen/screens/expirations/components/FilterModalize.tsx
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";

interface FilterModalizeProps {
  filter: string;
}

const FilterModalize = ({ filter }: any) => {
  return (
    <ScrollView style={styles.container}>
      {filter.map((item: any) => (
        <TouchableOpacity key={item}>
          <Text style={styles.title} key={item}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  container: {
    padding: 20,
    // alignItems: "center",
    maxHeight: 400,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.neutral["200"],
    borderRadius: 8,
  },
  overlay: {
    zIndex: 1000,
    elevation: 1000,
  },
  title: {
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default FilterModalize;
