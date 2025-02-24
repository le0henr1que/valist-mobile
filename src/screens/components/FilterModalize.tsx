  // src/screens/HomeScreen/screens/expirations/components/FilterModalize.tsx
  import React, { useState } from "react";
  import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
  import { colors } from "../../styles/colors";
  import { typography } from "../../styles/typography";

  interface FilterModalizeProps {
    filter: string[];
    onSelectFilter: (selectedOption: string) => void;
  }

  const FilterModalize = ({ filter,onSelectFilter }: FilterModalizeProps) => {

    const [selectedFilterItem, setSelectedFilterItem] = useState<string | null>(null);

    const handleSelect = (item: string) => {
      setSelectedFilterItem(item);
      onSelectFilter(item); 
    };

    return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
      {filter.map((item) => (
        <TouchableOpacity
        key={item}
        onPress={() => handleSelect(item)}
        style={[

          selectedFilterItem === item && styles.selectedItem 
        ]}>
          <Text style={styles.title}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
      </View>
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
    maxHeight: 470,
    width: "100%",
 
  },
  overlay: {
    zIndex: 1000,
    elevation: 1000,
  },
  title: {
    color: colors.neutral["900"],
    padding: 12,
    fontSize: 16,
    fontFamily: typography.fontFamily.medium,
    marginBottom: 12,
  },
  list: {
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    alignSelf:"stretch",
    borderRadius:12,
    borderColor: colors.neutral["200"],
    borderWidth:1,
    marginTop: 7,

  },
  selectedItem: {
    backgroundColor: colors.primary["50"], 
    width:"100%",
    
  },
});

export default FilterModalize;
