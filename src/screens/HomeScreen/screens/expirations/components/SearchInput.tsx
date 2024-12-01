import React, { useRef } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import SearchIcon from "../../../../../../assets/icons/search";
import ScamBarIcon from "../../../../../../assets/icons/scam-bar";
import { colors } from "../../../../../styles/colors";

const SearchInput = ({ name, control, onBarcodePress }: any) => {
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFocus}>
        <SearchIcon />
      </TouchableOpacity>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Procurar por produto ou código"
            placeholderTextColor="#999"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <TouchableOpacity style={styles.barcodeButton} onPress={onBarcodePress}>
        <ScamBarIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.neutral["100"],
    borderRadius: 8,
    gap: 8,
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.neutral["500"],
  },
  barcodeButton: {
    padding: 8,
  },
  submitButton: {
    marginTop: 16,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
  },
});

export default SearchInput;
