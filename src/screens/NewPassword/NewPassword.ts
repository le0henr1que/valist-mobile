import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    width: "100%",
    gap: 16,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    backgroundColor: colors.neutral["200"],
    width: "100%",
    borderWidth: 0.2,
    opacity: 0.2,
  },
  image: {
    width: 92,
    height: 29,
    resizeMode: "contain",
  },
  header: {
    flex: 1,
    backgroundColor: colors.primary["700"],
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    height: 188,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  confirmButton: {
    backgroundColor: "#007F5F",
    paddingVertical: 12,
    borderRadius: 8,
  },
  confirmButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  textHeader: {
    flex: 0,
    width: "100%",
    gap: 28,
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    paddingBottom: 25,
    paddingLeft: 20,
    paddingTop: 64,
    paddingRight: 20,
  },
  title: {
    color: "white",
    width: "70%",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: typography.weight.bold as any,
    lineHeight: 41.6,
  },
  body: {
    flex: 3,
    backgroundColor: "white",
    width: "100%",
  },
  button: {
    height: "100%",
    color: "pink",
  },
});
