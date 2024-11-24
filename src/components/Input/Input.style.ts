import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Input = StyleSheet.create({
  style: {
    width: "100%",
    display: "flex",
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.neutral["300"],
    fontSize: typography.size.base,
    lineHeight: typography.lineHeight.base,
    color: colors.neutral["900"],
  },
  inputPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconEye: { position: "absolute", right: 16 },
  styleError: {
    width: "100%",
    display: "flex",
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.danger["500"],
    backgroundColor: colors.danger["50"],
    fontSize: typography.size.base,
    lineHeight: typography.lineHeight.base,
    color: colors.neutral["900"],
  },
  inputView: {
    width: "100%",
    display: "flex",
    gap: 6,
  },
  label: {
    color: colors.neutral["900"],
    fontSize: typography.size.small,
    fontWeight: typography.weight.bold as any,
    lineHeight: typography.lineHeight.small as any,
  },
  errorText: {
    color: "red",
    marginBottom: 12,
  },
});
