import { StyleSheet } from "react-native";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.neutral["900"],
    fontSize: typography.size["2x-large"],
    fontWeight: typography.weight.extrabold as any,
    lineHeight: typography.lineHeight["2x-large"],
  },
  text: {
    color: colors.neutral["500"],
    fontSize: typography.size.small,
    fontWeight: typography.weight.normal as any,
    lineHeight: typography.lineHeight.small,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    gap: 16,
  },
  divImage: {
    flex: 2,
    width: "100%",
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  divContent: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    gap: 20,
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 24,
    paddingLeft: 20,
  },
  primaryButton: {
    backgroundColor: "#008000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  secondaryButton: {
    borderColor: "#008000",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  secondaryButtonText: {
    color: "#008000",
    fontSize: 16,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: colors.primary["600"],
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    bottom: 60,
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 24,
    paddingRight: 20,
    paddingBottom: 24,
    paddingLeft: 20,
  },
});
