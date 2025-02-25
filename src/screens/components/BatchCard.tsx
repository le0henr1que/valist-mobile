import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDialogModal } from "../../hook/handle-modal/hooks/actions";
import { RootStackParamList } from "../HomeScreen";
import ScamBarIcon from "../../../assets/icons/scam-bar";
import { colors } from "../../styles/colors";
import DotsVertical from "../../../assets/icons/dots-vertical";
import TrashIcon from "../../../assets/icons/trash";
import CardBatchAction from "./CardBatchAction";
import { typography } from "../../styles/typography";

const BatchCard = ({ batch }: any) => {
  const { handleModal } = useDialogModal();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePressProductCard = () => {
    console.log("Produto clicado");
    navigation.navigate("ViewBatch");
  };

  const handlePress = () => {
    handleModal({
      isOpen: true,
      element: <CardBatchAction />,
    });
  };
  return (
    <TouchableOpacity style={{ width: "100%" }}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => handlePress()} style={styles.header}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
            }}
          >
            <TrashIcon />
            <Text style={styles.expiredText}>
              VENCIDO HÁ {batch?.expiredDays} DIAS
            </Text>
          </View>
          <TouchableOpacity onPress={() => handlePress()}>
            <DotsVertical />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePressProductCard()}>
          <View style={styles.body}>
            <View style={styles.details}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View>
                  <Text style={styles.text}>
                    Lote:
                    <Text style={{ color: colors.neutral["900"] }}>
                      {batch.batchCode}
                    </Text>
                  </Text>
                  <Text style={styles.text}>
                    Data de validade: {batch?.expiryDate}
                  </Text>
                </View>
                <Text style={styles.price}>R$ {batch?.price}</Text>
              </View>
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
              <Text style={styles.quantity}>{batch?.quantity} itens</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    justifyContent: "space-between",
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
    fontFamily: typography.fontFamily.semibold,
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

export default BatchCard;
