import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../../../styles/colors";

const FilterCarousel = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const filters = [
    "Todos",
    "Categorias",
    "Quantidade",
    "Preço",
    "Marca",
    "Cor",
  ];

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === item && styles.activeFilterButton,
            ]}
            onPress={() => handleFilterPress(item)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === item && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
  },
  filterButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.neutral["500"],
  },
  activeFilterButton: {
    backgroundColor: "#d1f7e6",
    borderColor: "#a2e3d3",
  },
  filterText: {
    color: "#333",
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#000",
    fontWeight: "700",
  },
});

export default FilterCarousel;
