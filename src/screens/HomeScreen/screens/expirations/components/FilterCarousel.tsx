// src/screens/HomeScreen/screens/expirations/components/FilterCarousel.tsx
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../../../styles/colors";
import CheckIcon from "../../../../../../assets/icons/check";
import CaretDown from "../../../../../../assets/icons/caret-down";

interface FilterCarouselProps {
  filters: string[];
  selectedFilter: string;
  onFilterPress: (filter: string) => void;
}

const FilterCarousel: React.FC<FilterCarouselProps> = ({
  filters,
  selectedFilter,
  onFilterPress,
}) => {
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
            onPress={() => onFilterPress(item)}
          >
            <View
              style={[
                styles.filterText,
                selectedFilter === item && styles.activeFilterText,
              ]}
            >
              {selectedFilter === item && <CheckIcon />} <Text>{item}</Text>
              <CaretDown />
            </View>
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
    gap: 6,
  },
  activeFilterButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#d1f7e6",
    borderColor: "#a2e3d3",
  },
  filterText: {
    color: "#333",
    display: "flex",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#000",
    fontWeight: "700",
    display: "flex",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterCarousel;
